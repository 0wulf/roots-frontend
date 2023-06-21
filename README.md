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

![gif login](https://github.com/0wulf/roots-frontend/assets/101217121/0e966f16-fb17-4590-a6c9-7a70e4bbdd44)

![WhatsApp Video 2023-06-21 at 18 05 52](https://github.com/0wulf/roots-frontend/assets/101217121/cca51956-17ef-48a4-87a4-6eaef56f65ca)

## Arquitectura
ROOTS es una plataforma con una arquitectura MVC compuesta por una base de datos de Postgres, una interfaz de aplicación  y una interfaz de usuario.

![IIC2513 Diagrama E_R juego(2)](https://github.com/0wulf/roots-frontend/assets/101217121/0d6b15e6-8198-4601-9313-48c2a02b17a2)

### Base de datos
El sistema de bases de datos utiliza Postgres. Acá almacenamos la información que manipula la aplicación y tiene un modelo E/R como sigue:

![IIC2513 Diagrama E_R juego(3)](https://github.com/0wulf/roots-frontend/assets/101217121/d068a9b0-ef39-4be0-b8d1-d70c1f0b22ed)

### [roots-api](https://roots-api.onrender.com)
Contamos con una interfaz de aplicación (API montada en `node.js + koa + sequelize`) que nos permite calcular las estimaciones del impacto de los usuarios y almacenar esta información en la base de datos.

![gif](https://github.com/0wulf/roots-frontend/assets/101217121/565f6595-18d3-4abf-8d4c-5459909ee682)

#### ¿Cómo estimamos el impacto?
testo

### [UI](https://roots-chile.netlify.app/)
Hemos comenzado el desarrollo de la interfaz de usuario, inspirados, evidentemente, en el [prototipo actual](#ROOTS##prototipo). Esta interfaz funciona como una prueba de concepto de lo mostrado en el prototipo y permite construir un producto mínimo viable

![gif frontend](https://github.com/0wulf/roots-frontend/assets/101217121/6523bc20-e40c-4104-8763-79f40786581c)

![gif frontend 2](https://github.com/0wulf/roots-frontend/assets/101217121/3d036f00-9370-4f58-8fb4-7260b60da6ea)



## Links
- [Repositorio Frontend](https://github.com/0wulf/roots-frontend)
- [Repositorio Backend](https://github.com/0wulf/roots-backend)
