/**
 * Modelo de Usuario
 * Representa la estructura de datos de un usuario
 */

class User {
    constructor(id, nombre, email, edad) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.fechaCreacion = new Date();
    }

    /**
     * Valida los datos del usuario
     * @returns {boolean} true si los datos son válidos
     */
    validar() {
        if (!this.nombre || this.nombre.length < 2) {
            throw new Error('El nombre debe tener al menos 2 caracteres');
        }
        
        if (!this.email || !this.email.includes('@')) {
            throw new Error('El email no es válido');
        }
        
        if (!this.edad || this.edad < 0 || this.edad > 120) {
            throw new Error('La edad debe estar entre 0 y 120 años');
        }
        
        return true;
    }

    /**
     * Convierte el usuario a formato JSON
     * @returns {Object} Objeto con los datos del usuario
     */
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
            edad: this.edad,
            fechaCreacion: this.fechaCreacion.toISOString()
        };
    }
}

module.exports = User;
