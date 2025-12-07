# GA8-220501096-AA1-EV01-desarrollar-software-a-partir-de-la-integracion

Proyecto de demostración de integración de software - Software Integration Demo Project

## Descripción / Description

Este proyecto demuestra los principios de integración de software mediante la implementación de un sistema que integra diferentes módulos y servicios externos.

This project demonstrates software integration principles through the implementation of a system that integrates different modules and external services.

## Características / Features

- **API Integration**: Cliente HTTP para integración con APIs REST externas
- **Data Processing**: Módulo de procesamiento y transformación de datos
- **Modular Architecture**: Estructura de código modular y reutilizable
- **Error Handling**: Manejo apropiado de errores y excepciones

## Estructura del Proyecto / Project Structure

```
GA8-220501096-AA1-EV01/
├── src/
│   ├── __init__.py
│   ├── main.py                    # Aplicación principal / Main application
│   └── integration/
│       ├── __init__.py
│       ├── api_client.py          # Cliente API / API client
│       └── data_processor.py      # Procesador de datos / Data processor
├── requirements.txt               # Dependencias / Dependencies
├── .gitignore                     # Archivos ignorados / Ignored files
└── README.md                      # Este archivo / This file
```

## Requisitos / Requirements

- Python 3.7 o superior / Python 3.7 or higher
- pip (gestor de paquetes de Python / Python package manager)

## Instalación / Installation

1. Clonar el repositorio / Clone the repository:
```bash
git clone https://github.com/thigupla/GA8-220501096-AA1-EV01-desarrollar-software-a-partir-de-la-integracion.git
cd GA8-220501096-AA1-EV01-desarrollar-software-a-partir-de-la-integracion
```

2. Instalar dependencias / Install dependencies:
```bash
pip install -r requirements.txt
```

## Uso / Usage

Ejecutar la aplicación principal / Run the main application:

```bash
python src/main.py
```

La aplicación demostrará:
1. Integración con una API REST pública (JSONPlaceholder)
2. Procesamiento y transformación de datos
3. Filtrado y agregación de información

The application will demonstrate:
1. Integration with a public REST API (JSONPlaceholder)
2. Data processing and transformation
3. Data filtering and aggregation

## Componentes / Components

### APIClient

Cliente para integración con APIs REST externas. Proporciona métodos para:
- Realizar peticiones GET y POST
- Gestionar sesiones HTTP
- Manejo de timeouts y errores

Client for integration with external REST APIs. Provides methods for:
- Making GET and POST requests
- Managing HTTP sessions
- Handling timeouts and errors

### DataProcessor

Módulo para procesamiento y transformación de datos. Incluye funciones para:
- Filtrar datos por criterios específicos
- Transformar estructuras de datos
- Agregar y resumir información

Module for data processing and transformation. Includes functions for:
- Filtering data by specific criteria
- Transforming data structures
- Aggregating and summarizing information

## Principios de Integración Demostrados / Integration Principles Demonstrated

1. **Separación de Responsabilidades**: Cada módulo tiene una responsabilidad específica
2. **Encapsulación**: Los detalles de implementación están ocultos detrás de interfaces claras
3. **Reutilización**: Los componentes pueden ser reutilizados en diferentes contextos
4. **Manejo de Errores**: Gestión apropiada de errores en las integraciones
5. **Modularidad**: Estructura de código modular y mantenible

1. **Separation of Concerns**: Each module has a specific responsibility
2. **Encapsulation**: Implementation details are hidden behind clear interfaces
3. **Reusability**: Components can be reused in different contexts
4. **Error Handling**: Appropriate error handling in integrations
5. **Modularity**: Modular and maintainable code structure

## Tecnologías Utilizadas / Technologies Used

- **Python 3**: Lenguaje de programación principal / Main programming language
- **Requests**: Biblioteca para peticiones HTTP / HTTP requests library
- **JSONPlaceholder**: API REST pública para testing / Public REST API for testing

## Autor / Author

Proyecto educativo - Educational project
GA8-220501096-AA1-EV01

## Licencia / License

Este es un proyecto educativo. / This is an educational project.