API para una biblioteca en Express

1. hay que hacer la UI también, en react []

2. la biblioteca tiene libros y de cada libro solo tiene un ejemplar []

3. la app necesita la entidad usuarios,a los cuales les vamos a prestar los libros []

4. llevar el registro de esos prestamos y mostrar ese registro []

5. CRUD (api/UI) de usuarios (a los que les prestamos los libros) y de libros (no hay necesidad de crear autores) []

6. cualquier base de datos a libre elección (mongo o sqlite) []

7. Entregar en repositorio de GitHub y con un readme file que indique
   los pasos que debo hacer para ejecutar la APP en mi computadora
   y mandar la url del repo a mi correo camilomontoya2@gmail.com
   fecha de entrega: 04/11/2022 6pm []

8. implementar typescript tanto en frontend como en backend []

# Biblioteca en Express y React

### **Pre-requisitos** 📋

Para el correcto funcionamiento del proyecto, es necesario tener

```
nodeJs
pnpm
```

https://nodejs.org/en/

https://pnpm.io/installation

**Instalacion rapida de pnpm**:

```
npm install -g pnpm
```

### **Instalación BackEnd** 🔧

En primera instancia debemos instalar las dependencias del servidor. Para esto debemos ubicarnos en la carpeta _/server_ y ejecutar:

```
pnpm install
```

Para arrancar el servidor, debemos inicializar un **Cluster de MongoDB**.

_La base de datos puede ser local o hosteada sobre Mongo Atlas_.

El siguiente paso es crear el archivo **.env** en la raiz de la carpeta _/server_ y crear una variable de entorno llamada **DATABASE_URI** a la que le asignaremos el String de coneccion con la base de datos.

```
DATABASE_URI=mongodb+srv://admin:<password>@cluster0.1vqd4b7.mongodb.net/?retryWrites=true&w=majority

```

Finalmente ejecutar:

```
pnpm build && pnpm start
```

### Instalación FrontEnd 🔧

## Construido con 🛠️

La aplicación esta construida bajo el stack MERN:

- MongoDB
- ExpressJs
- ReactJs
- NodeJs
