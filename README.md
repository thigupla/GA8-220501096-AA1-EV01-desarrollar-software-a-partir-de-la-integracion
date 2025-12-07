# 🔧 AutoFix Pro: Gestión de Taller con IA

> **Revolucionando la mecánica automotriz con asistencia de Inteligencia Artificial.**

![Status](https://img.shields.io/badge/Status-Prototipo_Funcional-success)
![Tech](https://img.shields.io/badge/Stack-React_|_TypeScript_|_Tailwind-blue)
![AI](https://img.shields.io/badge/AI-Powered_by_Gemini-purple)

**AutoFix Pro** es una solución web progresiva (PWA) diseñada para optimizar el flujo de trabajo en talleres mecánicos. No solo gestiona órdenes de servicio, sino que empodera a los mecánicos con un **Asistente de Diagnóstico basado en IA (Gemini)**, capaz de generar listas de verificación técnica basándose en los síntomas del vehículo.

---

## 🚀 Características Principales

### 📋 Gestión de Órdenes (Core)
- **Tablero de Control:** Visualización clara de órdenes pendientes, en progreso y completadas.
- **Búsqueda en Tiempo Real:** Filtrado instantáneo por placa, cliente o número de orden.
- **Indicadores Visuales:** Código de colores semántico para estados de las órdenes.

### 🤖 Asistente Técnico IA (Gemini API)
- **Diagnóstico Inteligente:** Al abrir una orden, el sistema analiza la descripción del problema (ej: "ruido en suspensión") y genera automáticamente un **Checklist Técnico** sugerido.
- **Soporte a la Decisión:** Ayuda a los mecánicos junior a seguir procedimientos estandarizados sugeridos por la IA.

### 📱 Experiencia de Usuario (UX)
- **Diseño Mobile-First:** Interfaz optimizada para uso en tablets y móviles dentro del taller.
- **Navegación Intuitiva:** Barra de navegación inferior y transiciones fluidas.
- **Accesibilidad:** Uso de etiquetas ARIA y contrastes adecuados.

---

## 🏗️ Arquitectura de Software

Este proyecto ha sido construido siguiendo estrictos estándares de ingeniería de software, priorizando la escalabilidad y el mantenimiento.

### Estructura Modular
La aplicación se divide en capas lógicas para separar responsabilidades:

```bash
src/
├── 📂 components/      # Componentes UI reutilizables (Presentational)
├── 📂 contexts/        # Gestión de Estado Global (Auth, Theme)
├── 📂 layouts/         # Estructuras de página (Header, Nav)
├── 📂 modules/         # Módulos de negocio (Orders, Clients)
│   └── 📂 orders/      # Lógica específica del dominio de órdenes
├── 📂 services/        # Comunicación con APIs externas (Gemini)
└── 📄 types.ts         # Definiciones de Tipos (Domain Layer)
```

### Patrones de Diseño Aplicados
1.  **Container/Presenter Pattern:** Separación entre lógica (`OrderListModule`) y vista (`ServiceOrderCard`).
2.  **Provider Pattern:** Uso de `AuthContext` para inyectar la sesión del usuario en toda la aplicación.
3.  **Adapter/Service Pattern:** Encapsulamiento de la llamada a la API de Google Gemini en `geminiService.ts`, desacoplando la IA de la vista.

---

## 🛠️ Stack Tecnológico

*   **Frontend Core:** React 18
*   **Lenguaje:** TypeScript (Tipado estricto para mayor robustez)
*   **Estilos:** Tailwind CSS (Utility-first framework)
*   **Inteligencia Artificial:** Google GenAI SDK (Gemini 2.5 Flash)
*   **Iconografía:** Lucide React

---

## 🏁 Instalación y Ejecución

Sigue estos pasos para desplegar el entorno de desarrollo local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/autofix-pro.git
    cd autofix-pro
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz y añade tu API Key de Google Gemini:
    ```env
    REACT_APP_GEMINI_API_KEY=tu_api_key_aqui
    ```

4.  **Ejecutar:**
    ```bash
    npm run start
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📸 Vistas del Sistema

| Lista de Órdenes | Detalle con IA |
|:---:|:---:|
| *Búsqueda y filtrado rápido* | *Diagnóstico generado por Gemini* |
| (Inserte captura aquí) | (Inserte captura aquí) |

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir los lineamientos de código (Linter & Prettier) y usar la convención de commits semánticos.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---
*Desarrollado con ❤️ para modernizar la industria automotriz.*
