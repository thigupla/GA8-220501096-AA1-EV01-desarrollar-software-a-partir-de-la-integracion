/**
 * Pruebas para el modelo User
 */

const User = require('../src/models/User');

describe('Modelo User', () => {
    test('Debería crear un usuario válido', () => {
        const usuario = new User(1, 'Juan Pérez', 'juan@ejemplo.com', 25);
        
        expect(usuario.id).toBe(1);
        expect(usuario.nombre).toBe('Juan Pérez');
        expect(usuario.email).toBe('juan@ejemplo.com');
        expect(usuario.edad).toBe(25);
    });

    test('Debería validar correctamente un usuario válido', () => {
        const usuario = new User(1, 'Juan Pérez', 'juan@ejemplo.com', 25);
        expect(() => usuario.validar()).not.toThrow();
    });

    test('Debería lanzar error con nombre inválido', () => {
        const usuario = new User(1, 'J', 'juan@ejemplo.com', 25);
        expect(() => usuario.validar()).toThrow('El nombre debe tener al menos 2 caracteres');
    });

    test('Debería lanzar error con email inválido', () => {
        const usuario = new User(1, 'Juan Pérez', 'juanejemplo.com', 25);
        expect(() => usuario.validar()).toThrow('El email no es válido');
    });

    test('Debería convertir a JSON correctamente', () => {
        const usuario = new User(1, 'Juan Pérez', 'juan@ejemplo.com', 25);
        const json = usuario.toJSON();
        
        expect(json).toHaveProperty('id');
        expect(json).toHaveProperty('nombre');
        expect(json).toHaveProperty('email');
        expect(json).toHaveProperty('edad');
        expect(json).toHaveProperty('fechaCreacion');
    });
});
