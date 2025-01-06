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
