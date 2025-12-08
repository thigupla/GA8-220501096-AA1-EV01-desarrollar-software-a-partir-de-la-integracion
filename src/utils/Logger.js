/**
 * Utilidad de Logging
 * Proporciona funciones para registrar eventos y errores
 */

class Logger {
    constructor() {
        this.nivel = 'INFO';
    }

    /**
     * Formatea el mensaje con timestamp y nivel
     * @param {string} nivel - Nivel del log (INFO, ERROR, DEBUG)
     * @param {string} mensaje - Mensaje a registrar
     * @returns {string} Mensaje formateado
     */
    formatear(nivel, mensaje) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${nivel}] ${mensaje}`;
    }

    /**
     * Registra un mensaje de información
     * @param {string} mensaje - Mensaje a registrar
     * @param {...any} args - Argumentos adicionales
     */
    info(mensaje, ...args) {
        console.log(this.formatear('INFO', mensaje), ...args);
    }

    /**
     * Registra un mensaje de error
     * @param {string} mensaje - Mensaje a registrar
     * @param {...any} args - Argumentos adicionales
     */
    error(mensaje, ...args) {
        console.error(this.formatear('ERROR', mensaje), ...args);
    }

    /**
     * Registra un mensaje de depuración
     * @param {string} mensaje - Mensaje a registrar
     * @param {...any} args - Argumentos adicionales
     */
    debug(mensaje, ...args) {
        if (this.nivel === 'DEBUG') {
            console.log(this.formatear('DEBUG', mensaje), ...args);
        }
    }

    /**
     * Registra un mensaje de advertencia
     * @param {string} mensaje - Mensaje a registrar
     * @param {...any} args - Argumentos adicionales
     */
    warn(mensaje, ...args) {
        console.warn(this.formatear('WARN', mensaje), ...args);
    }
}

module.exports = Logger;
