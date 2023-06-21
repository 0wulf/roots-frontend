 # ROOTS
*ROOTS* es una **aplicación** que facilita el proceso de recuperación de **residuos orgánicos**, con una **plataforma interactiva** que permite motivar a los usuarios a aumentar sus niveles de recolección de residuos. 

## *ROOTS* permite:
* Acceder al sistema de recolección de manera **rápida y sencilla**.
* Mantener contacto con la **municipalidad**.
* **Visualizar** los impactos de una forma novedosa.
* **Educar** a las personas.
* Invitar a amigos a la plataforma.

## Prototipo
Contamos con un [prototipo](https://www.figma.com/proto/fVerwk6SUqxPyG2U9HON7o/EducApp?node-id=167-22&starting-point-node-id=147%3A3) el cual hemos ido testeando e iterando.

https://github.com/0wulf/roots-frontend/assets/101217121/f909ed39-983d-4fc1-8ca9-8f7f6dd29cf0

## Arquitectura
ROOTS es una plataforma con una arquitectura MVC compuesta por una base de datos de Postgres, una interfaz de aplicación  y una interfaz de usuario.

### Base de datos
El sistema de bases de datos utiliza Postgres. Acá almacenamos la información que manipula la aplicación y tiene un modelo E/R como sigue:


### [roots-api](https://roots-api.onrender.com)
Contamos con una interfaz de aplicación (API montada en `node.js + koa + sequelize`) que nos permite calcular las estimaciones del impacto de los usuarios y almacenar esta información en la base de datos.

https://github.com/0wulf/roots-frontend/assets/101217121/30239bea-65c5-437d-9839-96b71f38167e

#### ¿Cómo estimamos el impacto?


### [UI](https://roots-chile.netlify.app/)
Hemos comenzado el desarrollo de la interfaz de usuario, inspirados, evidentemente, en el [prototipo actual](#ROOTS##prototipo). Esta interfaz funciona como una prueba de concepto de lo mostrado en el prototipo y permite construir un producto mínimo viable

## Links
- [Repositorio Frontend](https://github.com/0wulf/roots-frontend)
- [Repositorio Backend](https://github.com/0wulf/roots-backend)
