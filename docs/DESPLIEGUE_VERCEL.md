# Guía de Despliegue en Vercel

## 📋 Descripción

Esta guía te ayudará a desplegar la aplicación en Vercel de manera exitosa, evitando problemas comunes como la "pantalla blanca".

## ✅ Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub con el código
- Node.js instalado localmente para pruebas

## 🚀 Pasos para Desplegar

### 1. Preparar el Repositorio

Asegúrate de que tu repositorio tenga estos archivos clave:

- ✅ `package.json` - Con Express como dependencia
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `src/server.js` - Servidor web Express
- ✅ `public/index.html` - Interfaz de usuario
- ✅ `.gitignore` - Excluye node_modules y package-lock.json

### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración

### 3. Configuración Automática

Vercel usará la configuración en `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/src/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/src/server.js"
    }
  ]
}
```

### 4. Desplegar

1. Haz clic en "Deploy"
2. Espera a que termine el build (1-2 minutos)
3. Vercel te dará una URL pública
4. ¡Visita la URL y verás tu aplicación funcionando!

## 🔍 Verificar el Despliegue

Después del despliegue, verifica que:

- ✅ La página principal muestra la interfaz web (no pantalla blanca)
- ✅ Puedes crear usuarios usando el formulario
- ✅ La lista de usuarios se actualiza correctamente
- ✅ El indicador de estado muestra "Sistema Activo"

## 🐛 Solución de Problemas

### Problema: Pantalla Blanca

**Causa:** La aplicación no tiene un servidor web o interfaz HTML.

**Solución:** Asegúrate de tener:
- `src/server.js` con el servidor Express
- `public/index.html` con la interfaz web
- `vercel.json` con la configuración correcta

### Problema: Error 500 o Error de Servidor

**Causa:** Error en el código del servidor o dependencias faltantes.

**Solución:**
1. Revisa los logs en el dashboard de Vercel
2. Verifica que todas las dependencias estén en `package.json`
3. Prueba localmente con `npm start`

### Problema: API No Responde

**Causa:** Rutas mal configuradas en `vercel.json`.

**Solución:**
- Verifica que las rutas en `vercel.json` apunten a `src/server.js`
- Asegúrate de que el servidor Express esté exportando correctamente

## 🧪 Probar Localmente Antes de Desplegar

Siempre prueba localmente antes de desplegar:

```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start

# Visitar en navegador
http://localhost:3000
```

Si funciona localmente, funcionará en Vercel.

## 📊 Variables de Entorno (Opcional)

Si necesitas variables de entorno:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias
4. Redespliega el proyecto

## 🔄 Actualizaciones Automáticas

Vercel se configura automáticamente para:
- Redesplegar cuando hagas push a la rama principal
- Crear previews para pull requests
- Mantener versiones anteriores disponibles

## 📱 Características de la Aplicación Desplegada

Una vez desplegada, tu aplicación tendrá:

- ✅ Interfaz web moderna y responsive
- ✅ Formulario para crear usuarios
- ✅ Lista en tiempo real de usuarios
- ✅ API REST accesible
- ✅ Validación de datos
- ✅ Manejo de errores
- ✅ Diseño profesional con gradientes

## 🔗 Enlaces Útiles

- [Documentación de Vercel](https://vercel.com/docs)
- [Desplegar Node.js en Vercel](https://vercel.com/docs/frameworks/nodejs)
- [Dashboard de Vercel](https://vercel.com/dashboard)

## 💡 Consejos

1. **Usa el dominio personalizado:** Vercel permite configurar dominios propios
2. **Monitorea el uso:** Revisa el dashboard para ver tráfico y errores
3. **Mantén actualizado:** Haz git push para actualizar automáticamente
4. **Prueba localmente:** Siempre verifica cambios antes de desplegar

## ✨ Resultado Esperado

Después de seguir esta guía, verás una aplicación web funcional con:

- 🎨 Diseño moderno con gradiente morado
- 📝 Formulario interactivo para crear usuarios
- 👥 Lista dinámica de usuarios registrados
- ✅ Indicador de estado del sistema
- 🏗️ Sección explicando la arquitectura

**¡Ya no más pantalla blanca!** 🎉
