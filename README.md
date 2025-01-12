# My-Hospital-m4-ep2

Este proyecto es un sistema avanzado para la gestión de hospitales desarrollado con **ReactJS**. El objetivo principal es implementar funcionalidades avanzadas como el manejo eficiente del DOM virtual, referencias, fragmentos, contexto, componentes de orden superior (HOC) y portales para mejorar la modularidad y eficiencia del sistema.

---

## Funcionalidades principales

1. **Manejo del DOM Virtual**
   - Renderización eficiente de datos (ej. listado de doctores y servicios).
   - Uso de `componentDidMount`/`useEffect` para gestionar actualizaciones del DOM.

2. **Uso de Referencias en React**
   - Manipulación directa de elementos del DOM con referencias.
   - Ejemplo práctico: campo de formulario para agendar citas médicas.

3. **Fragmentos y Contexto**
   - Uso de `<React.Fragment>` para mejorar la estructura del DOM.
   - Implementación de Context API para gestionar el estado global.

4. **Validación con PropTypes**
   - Verificación de tipos de datos en componentes como `DoctorCard`, `ServiceList` y `AppointmentForm`.

5. **Componentes de Orden Superior y Portales**
   - Reutilización de lógica con HOC.
   - Uso de portales para renderizar modales sin interferir con el DOM principal.

6. **Optimización de Rendimiento**
   - Uso de herramientas como **React Profiler** para identificar cuellos de botella y mejorar el rendimiento.

---

## 🛠️ Herramientas utilizadas

- **ReactJS**: Biblioteca para construir interfaces de usuario.
- **PropTypes**: Validación de propiedades de los componentes.
- **React Developer Tools**: Herramientas para depurar y analizar el rendimiento.
- **CSS**: Estilización de los componentes.
- **React Portals**: Para crear elementos modales.

---

## 📂 Estructura del proyecto

my-hospital/ 
├── public/ 
├── src/ │
  ├── components/ │ 
  │ ├── DoctorCard.jsx │ 
  │ ├── ServiceList.jsx │
  │ ├── AppointmentForm.jsx │
├── context/ │ 
  │ ├── UserContext.js │
  
├── App.js │
├── index.js 
│ └── styles/ 
├── package.json 
└── README.md

## ⚙️ Instalación y configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/my-hospital.git
