# Biblioteca en Express y React

Este es un proyecto para un challenge de programación. La idea era construir una aplicación full-stack funcional en menos de un día. Este proyecto es una demostración de mis habilidades con el stack MERN y mi capacidad para desarrollar rápidamente aplicaciones de calidad.

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
</div>

<br/>
  
<img width="1360" height="768" alt="{0454786A-E588-4107-859F-8BE7B1D311E9}" src="https://github.com/user-attachments/assets/16811707-8229-42d6-b7a6-6b67f900c237" />

## ¿Qué hace la aplicación?

Es un sistema de gestión para una biblioteca. Puedes agregar, editar y eliminar libros y usuarios. También puedes prestar y devolver libros, y todo queda registrado en un historial de actividades.

## Features

- **CRUD completo:** Libros y usuarios.
- **Sistema de préstamos:** Prestar y devolver libros.
- **Registro de actividades:** Log de prestamos.

## Construido con 🛠️

La aplicación está construida bajo el stack MERN:

### Frontend

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **Axios**
- **React Icons**

### Backend

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **TypeScript**
- **dotenv**
- **cors**
- **morgan**

## Instalación 🔧

### **Pre-requisitos** 📋

Para el correcto funcionamiento del proyecto, es necesario tener

```
nodeJs
pnpm
```

https://nodejs.org/en/

https://pnpm.io/installation

**Instalación rápida de pnpm**:

```
npm install -g pnpm
```

### **Descargar el projecto** 🔧

Para descargar el proyecto primero se debe ejecutar el siguiente comando en la consola

```
git clone https://github.com/DiegoxK/Biblioteca-Express
cd biblioteca-express
```

### **Instalación BackEnd** 🔧

En primera instancia debemos instalar las dependencias del servidor. Para esto debemos ubicarnos en la carpeta _/server_ y ejecutar:

```
pnpm install
```

Para arrancar el servidor, debemos inicializar un **Cluster de MongoDB**.

_La base de datos puede ser local o hosteada sobre Mongo Atlas_.

El siguiente paso es crear el archivo **.env** en la raiz de la carpeta _/server_ y crear una variable de entorno llamada **DATABASE_URI** a la que le asignaremos el String de conexión con la base de datos.

```
DATABASE_URI=mongodb+srv://admin:<password>@cluster0.1vqd4b7.mongodb.net/?retryWrites=true&w=majority

```

Finalmente ejecutar:

```
pnpm start
```

### Instalación FrontEnd 🔧

En primera instancia debemos instalar las dependencias del frontend. Para esto debemos ubicarnos en la carpeta _/client_ en una nueva instancia de la consola en mi carpeta _biblioteca-express_ y ejecutar:

```
cd client
pnpm install
```

Luego para inicializar el servidor local con vite ejecutamos :

```
pnpm dev
```

Lo que ejecutara mi aplicación en modo de desarrollo en un host local:

```
  VITE v3.2.2  ready in 1619 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

"Todas las llamadas a la base de datos se realizan a la ruta **http://localhost:3200/api**"

"Asegurarse de tener inicializado el servidor del backend para ver la información en el en frontend"

## API Endpoints

Todos los endpoints están prefijados con `/api`.

### Libros

- `GET /books`: Obtiene todos los libros.
- `GET /books/available`: Obtiene todos los libros disponibles.
- `GET /books/borrowed`: Obtiene todos los libros prestados.
- `GET /books/:id`: Obtiene un libro por su ID.
- `POST /books`: Crea un nuevo libro.
- `PUT /books/:id`: Actualiza un libro por su ID.
- `DELETE /books/:id`: Elimina un libro por su ID.

### Usuarios

- `GET /users`: Obtiene todos los usuarios.
- `GET /users/:id`: Obtiene un usuario por su ID.
- `POST /users`: Crea un nuevo usuario.
- `PUT /users/:id`: Actualiza un usuario por su ID.
- `DELETE /users/:id`: Elimina un usuario por su ID.
- `POST /users/:id/borrow`: Presta un libro.
- `POST /users/:id/return`: Devuelve un libro.

### Logs

- `GET /logs`: Obtiene todos los registros de actividad.
