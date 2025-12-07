/**
 * Archivo de configuración de la aplicación
 */

module.exports = {
    // Configuración de la aplicación
    app: {
        nombre: 'Sistema de Integración de Software',
        version: '1.0.0',
        puerto: process.env.PORT || 3000,
        entorno: process.env.NODE_ENV || 'development'
    },

    // Configuración de base de datos
    database: {
        tipo: 'simulada',
        timeout: 5000
    },

    // Configuración de logging
    logging: {
        nivel: process.env.LOG_LEVEL || 'INFO',
        formato: 'texto'
    }
};
