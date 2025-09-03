# Biblioteca en Express y React

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

API para una biblioteca en Express

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
git clone https://github.com/DiegoxK/biblioteca-express
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

## Construido con 🛠️

La aplicación esta construida bajo el stack MERN:

- MongoDB
- ExpressJs
- ReactJs
- NodeJs
