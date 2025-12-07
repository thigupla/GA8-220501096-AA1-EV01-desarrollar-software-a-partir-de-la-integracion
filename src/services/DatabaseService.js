/**
 * Servicio de Base de Datos
 * Simula operaciones de base de datos para demostración
 */

class DatabaseService {
    constructor() {
        this.conectado = false;
        this.datos = {};
        this.contadorId = 0;
    }

    /**
     * Conecta a la base de datos
     * @returns {Promise<void>}
     */
    async connect() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.conectado = true;
                resolve();
            }, 100);
        });
    }

    /**
     * Desconecta de la base de datos
     * @returns {Promise<void>}
     */
    async disconnect() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.conectado = false;
                resolve();
            }, 100);
        });
    }

    /**
     * Genera un ID único
     * @returns {string} ID generado
     */
    generarId() {
        this.contadorId++;
        return `ID-${this.contadorId}-${Date.now()}`;
    }

    /**
     * Guarda un registro en la base de datos
     * @param {string} coleccion - Nombre de la colección
     * @param {Object} datos - Datos a guardar
     * @returns {Promise<void>}
     */
    async guardar(coleccion, datos) {
        if (!this.conectado) {
            throw new Error('No hay conexión a la base de datos');
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.datos[coleccion]) {
                    this.datos[coleccion] = [];
                }
                this.datos[coleccion].push(datos);
                resolve();
            }, 50);
        });
    }

    /**
     * Obtiene todos los registros de una colección
     * @param {string} coleccion - Nombre de la colección
     * @returns {Promise<Array>} Lista de registros
     */
    async obtenerTodos(coleccion) {
        if (!this.conectado) {
            throw new Error('No hay conexión a la base de datos');
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.datos[coleccion] || []);
            }, 50);
        });
    }

    /**
     * Busca un registro por ID
     * @param {string} coleccion - Nombre de la colección
     * @param {string} id - ID a buscar
     * @returns {Promise<Object|null>} Registro encontrado o null
     */
    async buscarPorId(coleccion, id) {
        if (!this.conectado) {
            throw new Error('No hay conexión a la base de datos');
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                const registros = this.datos[coleccion] || [];
                const encontrado = registros.find(r => r.id === id);
                resolve(encontrado || null);
            }, 50);
        });
    }
}

module.exports = DatabaseService;
