/**
 * Controlador de Usuarios
 * Maneja la lógica de negocio relacionada con usuarios
 */

const User = require('../models/User');

class UserController {
    constructor(databaseService, logger) {
        this.dbService = databaseService;
        this.logger = logger;
    }

    /**
     * Crea un nuevo usuario
     * @param {Object} datos - Datos del usuario (nombre, email, edad)
     * @returns {Promise<User>} Usuario creado
     */
    async crearUsuario(datos) {
        this.logger.info('Creando usuario:', datos.email);
        
        try {
            // Generar ID único
            const id = this.dbService.generarId();
            
            // Crear instancia del modelo
            const usuario = new User(id, datos.nombre, datos.email, datos.edad);
            
            // Validar datos
            usuario.validar();
            
            // Guardar en la base de datos
            await this.dbService.guardar('usuarios', usuario.toJSON());
            
            this.logger.info('Usuario creado exitosamente:', id);
            return usuario;
            
        } catch (error) {
            this.logger.error('Error al crear usuario:', error.message);
            throw error;
        }
    }

    /**
     * Obtiene todos los usuarios
     * @returns {Promise<Array>} Lista de usuarios
     */
    async obtenerUsuarios() {
        this.logger.info('Obteniendo lista de usuarios');
        
        try {
            const usuarios = await this.dbService.obtenerTodos('usuarios');
            return usuarios;
        } catch (error) {
            this.logger.error('Error al obtener usuarios:', error.message);
            throw error;
        }
    }

    /**
     * Busca un usuario por ID
     * @param {string} id - ID del usuario
     * @returns {Promise<Object|null>} Usuario encontrado o null
     */
    async buscarPorId(id) {
        this.logger.info('Buscando usuario:', id);
        
        try {
            const usuario = await this.dbService.buscarPorId('usuarios', id);
            return usuario;
        } catch (error) {
            this.logger.error('Error al buscar usuario:', error.message);
            throw error;
        }
    }
}

module.exports = UserController;
