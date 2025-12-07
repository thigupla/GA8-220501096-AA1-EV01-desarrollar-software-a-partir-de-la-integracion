# Directorio de Pruebas

Este directorio contiene las pruebas unitarias y de integración del proyecto.

## Estructura

- `user.test.js` - Pruebas para el modelo User
- (Agregar más archivos de prueba según sea necesario)

## Ejecutar las pruebas

Para ejecutar las pruebas, utiliza:

```bash
npm test
```

## Nota

Las pruebas están preparadas para usar un framework de testing como Jest.
Para habilitar las pruebas, instala Jest:

```bash
npm install --save-dev jest
```

Y actualiza el script de test en `package.json`:

```json
"scripts": {
  "test": "jest"
}
```
