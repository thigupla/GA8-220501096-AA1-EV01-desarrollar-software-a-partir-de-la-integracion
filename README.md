# GA8-220501096-AA1-EV01 - Desarrollar Software a partir de la Integración

## 📋 Descripción

Este proyecto es una demostración práctica de desarrollo de software mediante la integración de componentes modulares. Implementa una arquitectura organizada siguiendo los principios de diseño SOLID y las mejores prácticas de desarrollo.

## 🎯 Objetivos del Proyecto

- Demostrar la integración efectiva de componentes de software
- Aplicar patrones de diseño y arquitectura modular
- Implementar separación de responsabilidades
- Proporcionar código bien documentado y mantenible

## 🏗️ Arquitectura

El proyecto sigue una arquitectura de **Modelo-Controlador-Servicio** con los siguientes componentes:

- **Modelos**: Definen la estructura de datos y validaciones
- **Controladores**: Implementan la lógica de negocio
- **Servicios**: Gestionan el acceso a datos y recursos externos
- **Utilidades**: Funciones auxiliares reutilizables

Para más detalles, consulta la [Documentación de Arquitectura](docs/ARQUITECTURA.md).

## 📁 Estructura del Proyecto

```
.
├── src/                    # Código fuente backend
│   ├── controllers/        # Controladores de lógica de negocio
│   │   └── UserController.js
│   ├── models/            # Modelos de datos
│   │   └── User.js
│   ├── services/          # Servicios de acceso a datos
│   │   └── DatabaseService.js
│   ├── utils/             # Utilidades
│   │   └── Logger.js
│   ├── server.js          # Servidor web Express
│   └── index.js           # Lógica de integración (CLI)
├── public/                # Archivos frontend
│   └── index.html         # Interfaz web de usuario
├── tests/                 # Pruebas unitarias e integración
│   ├── user.test.js
│   └── README.md
├── docs/                  # Documentación
│   ├── ARQUITECTURA.md
│   └── GUIA_INSTALACION.md
├── config/                # Archivos de configuración
│   └── config.js
├── .gitignore            # Archivos a ignorar en Git
├── vercel.json           # Configuración de Vercel
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js v14 o superior
- npm (Node Package Manager)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd GA8-220501096-AA1-EV01-desarrollar-software-a-partir-de-la-integracion
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor web:
   ```bash
   npm start
   ```

4. Abre tu navegador en `http://localhost:3000`

Para más detalles, consulta la [Guía de Instalación](docs/GUIA_INSTALACION.md).

### Despliegue en Vercel

Este proyecto está configurado para desplegarse fácilmente en Vercel:

1. Sube el código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente la configuración
4. ¡Tu aplicación estará en línea en segundos!

## 💻 Uso

### Ejecutar el Servidor Web

```bash
npm start
```

El servidor se iniciará en `http://localhost:3000` y verás:
```
[INFO] Servidor iniciado en puerto 3000
[INFO] Visita http://localhost:3000 para ver la aplicación
[INFO] Base de datos conectada
```

### Interfaz Web

La aplicación incluye una interfaz web completa donde puedes:

1. **Crear Usuarios**: Formulario interactivo para agregar usuarios con validación
2. **Ver Lista de Usuarios**: Visualización en tiempo real de todos los usuarios registrados
3. **Actualizar**: Botón para refrescar la lista de usuarios
4. **Estado del Sistema**: Indicador visual del estado de conexión

### API REST

También puedes interactuar con la API directamente:

**Obtener estado:**
```bash
curl http://localhost:3000/api/health
```

**Crear usuario:**
```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Juan Pérez","email":"juan@ejemplo.com","edad":25}'
```

**Listar usuarios:**
```bash
curl http://localhost:3000/api/usuarios
```

## 🧪 Pruebas

El proyecto incluye pruebas de ejemplo en el directorio `tests/`.

Para ejecutar las pruebas (requiere Jest):

```bash
# Instalar Jest
npm install --save-dev jest

# Ejecutar pruebas
npm test
```

## 📚 Documentación Adicional

- [Arquitectura del Sistema](docs/ARQUITECTURA.md) - Descripción detallada de la arquitectura
- [Guía de Instalación](docs/GUIA_INSTALACION.md) - Instrucciones de instalación completas
- [Tests README](tests/README.md) - Información sobre pruebas

## 🔑 Características Principales

- ✅ **Interfaz Web Interactiva**: Aplicación web completa con diseño moderno y responsive
- ✅ **API RESTful**: Endpoints bien definidos para todas las operaciones
- ✅ Arquitectura modular y escalable
- ✅ Separación clara de responsabilidades (MVC)
- ✅ Inyección de dependencias
- ✅ Validación de datos robusta
- ✅ Sistema de logging completo
- ✅ Manejo de errores en todas las capas
- ✅ Código bien documentado en español
- ✅ Estructura de pruebas preparada
- ✅ **Listo para Vercel**: Configuración incluida para despliegue instantáneo

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web para Node.js
- **JavaScript** - Lenguaje de programación (frontend y backend)
- **HTML5/CSS3** - Interfaz de usuario moderna y responsive
- **Vercel** - Plataforma de despliegue
- **Jest** (opcional) - Framework de pruebas

## 📝 Licencia

MIT

## 👥 Autor

Proyecto desarrollado para la actividad GA8-220501096-AA1-EV01