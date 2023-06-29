### *Disclaimer*
Prefiera leer este documento en su [página original](https://github.com/0wulf/roots-frontend/blob/main/README.md).

# ROOTS

*ROOTS* es una **aplicación** que facilita el proceso de recuperación de **residuos orgánicos**, con una **plataforma interactiva** que permite motivar a los usuarios a aumentar sus niveles de recolección de residuos. 

<div align=center>
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/341e80f9-a804-4bad-bd1d-f299165c8299">
</div>

## *ROOTS* permite:
* Acceder al sistema de recolección de manera **rápida y sencilla**.
* Mantener contacto con la **municipalidad**.
* **Visualizar** los impactos de una forma novedosa.
* **Educar** a las personas.
* Invitar a amigos a la plataforma.

## Prototipo

### Arquitectura
ROOTS es una plataforma con una arquitectura MVC compuesta por una base de datos de Postgres, una interfaz de aplicación y una interfaz de usuario.

<div align=center>
  <img height=60% width=60% src="https://github.com/0wulf/roots-frontend/assets/101217121/0d6b15e6-8198-4601-9313-48c2a02b17a2">
</div>

### Interfaz de Usuario
Contamos con un [prototipo de Figma](https://www.figma.com/proto/fVerwk6SUqxPyG2U9HON7o/EducApp?node-id=167-22&starting-point-node-id=147%3A3)  (en dispositivos móviles no se despliega correctamente a menos que utilice la aplicación de Figma) el cual hemos ido testeando e iterando.

<div align=center>
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/d8ccd98a-3c4f-4a7e-bfe5-99c0f174b3e1">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/2bae1978-00bd-4e62-b663-2ae50890b014">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/a3c077df-5dab-4394-bbc1-e0f541b83cbe">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/f815647e-19bb-4280-8c0f-ebbf6c91585a">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/6bd822d3-84af-4c44-b451-61d29757dc6f">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/36f25fdf-ab6b-49b7-bc6a-a34be2ce11f2">
</div>

<div align=center>
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/0e966f16-fb17-4590-a6c9-7a70e4bbdd44">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/cca51956-17ef-48a4-87a4-6eaef56f65ca">
</div>

#### Interfaz Web
Hemos comenzado el desarrollo de la interfaz de usuario, inspirados, evidentemente, en el [prototipo actual](#ROOTS##prototipo). [Esta interfaz](https://roots-chile.netlify.app/) (`node.js + react`) funciona como una prueba de concepto de lo mostrado en el prototipo y permite construir un producto mínimo viable.

<div align=center>
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/6523bc20-e40c-4104-8763-79f40786581c">
  <img height=30% width=30% src="https://github.com/0wulf/roots-frontend/assets/101217121/3d036f00-9370-4f58-8fb4-7260b60da6ea">
</div>

### Base de datos
El sistema de bases de datos utiliza Postgres. Acá almacenamos la información que manipula la aplicación y tiene un modelo E/R como sigue:

<div align=center>
  <img height=50% width=50% src="https://github.com/0wulf/roots-frontend/assets/101217121/d068a9b0-ef39-4be0-b8d1-d70c1f0b22ed">
</div>

### [roots-api](https://roots-api.onrender.com)
Contamos con una interfaz de aplicación (API montada en `node.js + koa + sequelize`) que nos permite calcular las estimaciones del impacto de los usuarios y almacenar esta información en la base de datos.

<div align=center>
  <img height=80% width=80% src="https://github.com/0wulf/roots-frontend/assets/101217121/565f6595-18d3-4abf-8d4c-5459909ee682">
</div>

#### ¿Cómo estimamos el impacto?
Hemos generado un modelo en base a datos confiables, el cual permite estimar la cantidad de RROO que genera un usuario. Utilizamos ponderadores como la cantidad de RROO generadospor persona al día, el tiempo transcurrido, las huellas de carbono e hídricas para el proceso de compostaje y deposición de basrua, etc. Luego esta cantidad se traduce a diversas unidades (e.g. reducción de la huella de carbono, compost generado, etc.) que permiten mostrar el impacto del usuario.

<div align=center>
  <img height=50% width=50% src="https://github.com/0wulf/roots-frontend/assets/101217121/b8f315ac-34da-4cc0-98fa-26f51277babb">
</div>

### Links
* [Prototipo Figma](https://www.figma.com/proto/fVerwk6SUqxPyG2U9HON7o/EducApp?node-id=167-22&starting-point-node-id=147%3A3) (en dispositivos móviles utilizar la aplicación de Figma o la versión de escritorio)
* [Prototipo UI](https://roots-chile.netlify.app/)
* [Prototipo API](https://roots-api.onrender.com)
