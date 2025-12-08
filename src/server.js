/**
 * Servidor web con Express
 * Proporciona una interfaz web para la aplicación
 */

const express = require('express');
const path = require('path');
const UserController = require('./controllers/UserController');
const DatabaseService = require('./services/DatabaseService');
const Logger = require('./utils/Logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Inicializar servicios
const logger = new Logger();
const dbService = new DatabaseService();
const userController = new UserController(dbService, logger);

// Conectar a la base de datos al iniciar
dbService.connect().then(() => {
    logger.info('Base de datos conectada');
}).catch(error => {
    logger.error('Error al conectar base de datos:', error);
});

// Rutas API
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Sistema de Integración de Software funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/usuarios', async (req, res) => {
    try {
        const usuarios = await userController.obtenerUsuarios();
        res.json({ success: true, data: usuarios });
    } catch (error) {
        logger.error('Error al obtener usuarios:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const { nombre, email, edad } = req.body;
        
        if (!nombre || !email || !edad) {
            return res.status(400).json({ 
                success: false, 
                error: 'Datos incompletos. Se requiere nombre, email y edad.' 
            });
        }
        
        const edadNum = Number(edad);
        if (isNaN(edadNum)) {
            return res.status(400).json({ 
                success: false, 
                error: 'La edad debe ser un número válido.' 
            });
        }
        
        const usuario = await userController.crearUsuario({ nombre, email, edad: edadNum });
        res.json({ success: true, data: usuario.toJSON() });
    } catch (error) {
        logger.error('Error al crear usuario:', error.message);
        res.status(400).json({ success: false, error: error.message });
    }
});

app.get('/api/usuarios/:id', async (req, res) => {
    try {
        const usuario = await userController.buscarPorId(req.params.id);
        if (usuario) {
            res.json({ success: true, data: usuario });
        } else {
            res.status(404).json({ success: false, error: 'Usuario no encontrado' });
        }
    } catch (error) {
        logger.error('Error al buscar usuario:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Ruta principal - servir HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Iniciar servidor
const server = app.listen(PORT, () => {
    logger.info(`Servidor iniciado en puerto ${PORT}`);
    logger.info(`Visita http://localhost:${PORT} para ver la aplicación`);
});

// Manejo de cierre graceful
const shutdown = async () => {
    logger.info('Cerrando servidor...');
    server.close(async () => {
        await dbService.disconnect();
        logger.info('Servidor cerrado correctamente');
        process.exit(0);
    });
    
    // Forzar cierre después de 10 segundos
    setTimeout(() => {
        logger.error('Forzando cierre del servidor...');
        process.exit(1);
    }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

module.exports = app;
