/**
 * Punto de entrada principal de la aplicación
 * Demuestra integración de componentes de software
 */

const UserController = require('./controllers/UserController');
const DatabaseService = require('./services/DatabaseService');
const Logger = require('./utils/Logger');

// Inicializar servicios
const logger = new Logger();
const dbService = new DatabaseService();
const userController = new UserController(dbService, logger);

// Función principal
async function main() {
    logger.info('Iniciando aplicación...');
    
    try {
        // Conectar a la base de datos (simulado)
        await dbService.connect();
        logger.info('Conexión a base de datos establecida');
        
        // Ejemplo de operaciones de integración
        const nuevoUsuario = await userController.crearUsuario({
            nombre: 'Juan Pérez',
            email: 'juan.perez@ejemplo.com',
            edad: 25
        });
        logger.info('Usuario creado:', nuevoUsuario);
        
        const usuarios = await userController.obtenerUsuarios();
        logger.info('Usuarios en el sistema:', usuarios);
        
    } catch (error) {
        logger.error('Error en la aplicación:', error.message);
    } finally {
        await dbService.disconnect();
        logger.info('Aplicación finalizada');
    }
}

// Ejecutar aplicación
if (require.main === module) {
    main().catch(error => {
        console.error('Error fatal:', error);
        process.exit(1);
    });
}

module.exports = { main };
