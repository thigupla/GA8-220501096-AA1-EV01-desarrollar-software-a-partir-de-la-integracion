# Guía de Instalación

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)
- Git

## Pasos de Instalación

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd GA8-220501096-AA1-EV01-desarrollar-software-a-partir-de-la-integracion
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configuración (Opcional)

Si necesitas configuración personalizada, crea un archivo `.env`:

```bash
# .env
NODE_ENV=development
PORT=3000
LOG_LEVEL=INFO
```

### 4. Ejecutar la Aplicación

```bash
npm start
```

O en modo desarrollo:

```bash
npm run dev
```

### 5. Ejecutar Pruebas (Opcional)

Primero instala Jest:

```bash
npm install --save-dev jest
```

Luego ejecuta:

```bash
npm test
```

## Verificación de la Instalación

Si la instalación fue exitosa, deberías ver una salida similar a:

```
[2024-XX-XX] [INFO] Iniciando aplicación...
[2024-XX-XX] [INFO] Conexión a base de datos establecida
[2024-XX-XX] [INFO] Usuario creado: {...}
[2024-XX-XX] [INFO] Usuarios en el sistema: [...]
[2024-XX-XX] [INFO] Aplicación finalizada
```

## Solución de Problemas

### Error: "Cannot find module"
Asegúrate de haber ejecutado `npm install` correctamente.

### Error de permisos
En Linux/Mac, puede que necesites usar `sudo npm install`.

### Puerto en uso
Si el puerto 3000 está ocupado, cambia el puerto en la configuración.

## Próximos Pasos

- Revisa la [Arquitectura del Sistema](ARQUITECTURA.md)
- Explora el código en el directorio `src/`
- Ejecuta las pruebas en el directorio `tests/`
- Consulta el [README principal](../README.md) para más información
