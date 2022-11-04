API para una biblioteca en Express

1. hay que hacer la UI también, en react - [X]

2. la biblioteca tiene libros y de cada libro solo tiene un ejemplar - [X]

3. la app necesita la entidad usuarios, a los cuales les vamos a prestar los libros - [X]

4. llevar el registro de esos prestamos y mostrar ese registro - [X]

5. CRUD (api/UI) de usuarios (a los que les prestamos los libros) y de libros (no hay necesidad de crear autores) - [X]

6. cualquier base de datos a libre elección (mongo o sqlite) - [X]

7. implementar typescript tanto en frontend como en backend - [X]

# Biblioteca en Express y React

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
