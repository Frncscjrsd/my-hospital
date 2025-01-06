# Sistema de Gestión Hospitalaria con ReactJS

Este proyecto es un ejercicio práctico para implementar un sistema de gestión hospitalaria utilizando ReactJS. Incluye componentes reutilizables, manejo de estado con Hooks, y formularios para la interacción del usuario.

---

## **Características**

- **Componentes Reutilizables:** 
  - `DoctorCard`: Muestra información de los doctores (nombre, especialidad y años de experiencia).
  - `ServiceList`: Lista los servicios médicos disponibles.
  - `AppointmentForm`: Permite agendar citas médicas con un doctor.

- **Manejo de Estado y Ciclo de Vida con Hooks:**
  - Uso de `useState` para gestionar datos dinámicos.
  - Uso de `useEffect` para cargar datos al montar el componente principal.

- **Interacción con Formularios:**
  - Captura de datos del usuario (nombre del paciente, doctor seleccionado, y fecha).
  - Muestra los datos en la consola o en la interfaz.

---

## **Requisitos Previos**

- [Node.js](https://nodejs.org/) instalado en tu máquina.
- Un gestor de paquetes como `npm` o `yarn`.

---

## **Estructura del Proyecto**

src/ ├── components/ │ ├── DoctorCard.js # Componente para mostrar información de doctores │ ├── ServiceList.js # Componente para listar servicios médicos │ ├── AppointmentForm.js # Componente para agendar citas médicas ├── App.js # Componente principal ├── App.css # Estilos globales ├── index.js # Punto de entrada del proyecto

yaml
Copiar código

---

## **Instalación**

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario-hospital-system.git
   cd tu-usuario-hospital-system
Instala las dependencias:

bash
Copiar código
npm install
Inicia el servidor de desarrollo:

bash
Copiar código
npm start
Abre tu navegador en http://localhost:3000.

Uso
Doctores:

Se muestran tarjetas con la información de los doctores.
Servicios Médicos:

Lista los servicios ofrecidos por el hospital.
Formulario de Citas:

Permite al usuario ingresar su nombre, elegir un doctor y seleccionar la fecha de la cita.
Los datos del formulario se muestran en la consola al enviarlo.
Personalización
Puedes personalizar los datos iniciales de doctores y servicios modificando el estado inicial en el archivo App.js:

javascript
Copiar código
const [doctors, setDoctors] = useState([
  { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología", experience: 10 },
  { id: 2, name: "Dra. María López", specialty: "Pediatría", experience: 5 },
]);

const [services, setServices] = useState([
  "Consulta General",
  "Cirugía",
  "Pediatría",
  "Cardiología",
]);
Contribución
Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -m 'Añade nueva funcionalidad').
Haz un push a la rama (git push origin feature/nueva-funcionalidad).
Crea un Pull Request.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
