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
ROOTS es una plataforma con una arquitectura MVC compuesta por una base de datos de Postgres, donde almacenamos la información que manipula la aplicación; por una interfaz de aplicación ([roots-api](https://roots-api.onrender.com): API en entorno `Node.js + koa`) que permite manejar la lógica de la aplicación y estimar el impacto positivo del usuario; y una interfaz de usuario ([Frontend](https://roots-chile.netlify.app/) con entorno de `TypeScript + React`) que permite al usuario interactuar con la aplicación.



## Links
- [Repositorio Frontend](https://github.com/0wulf/roots-frontend)
- [Repositorio Backend](https://github.com/0wulf/roots-backend)
