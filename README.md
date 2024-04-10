# API Bonsai App

Este proyecto es una API para gestionar datos relacionados con bonsáis.

## Descripción

API Bonsai App es una aplicación backend construida en Node.js y Express.js que proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en datos de bonsáis.

## Acceso al Repositorio

El repositorio de este proyecto se encuentra en GitHub: [API Bonsai App](https://github.com/BeatrizMercado/APIBonsaiApp.git).


## Tecnologías Utilizadas

- Node.js
- Express.js
- Sequelize (ORM para la base de datos)
- Jest (para pruebas)
- Supertest (test)
- 
## Estructura de Directorios

- **controllers**: Contiene los controladores de la lógica de la aplicación.
- **database**: Directorio relacionado con la base de datos.
  - **connection_db.js**: Archivo de conexión a la base de datos.
- **helpers**: Contiene funciones de ayuda para la aplicación.
  - **validationHelper.js**: Funciones de validación.
- .**models**: Definición de modelos de la base de datos.
- **routes**: Contiene los archivos de enrutamiento de la API.
- **test**: Directorio para pruebas.
  - **Bonsai.test.js**: Archivo de pruebas para la API de Bonsai.
- **validator**: Carpeta relacionada con la validación de datos.
- **validators**: Carpeta relacionada con los validadores.
- **.env**: Archivo de configuración de variables de entorno.
- **.env_example**: Ejemplo de archivo .env.
- **.gitignore**: Archivo para especificar qué archivos y directorios se deben ignorar en Git.
- **app.js**: Archivo principal de la aplicación.
- **config.js**: Archivo de configuración de la aplicación.
- **package-lock.json**: Archivo generado automáticamente que detalla la estructura exacta de dependencias instaladas.
- **package.json**: Archivo de configuración de npm que contiene las dependencias del proyecto y otra información relevante.
- **README.md**: Este archivo.

## Instalación y Configuración

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando `npm install`.
3. Crea un archivo `.env` basado en el ejemplo proporcionado en `.env_example`.
4. Ejecuta la aplicación utilizando `node app.js`.


## Uso

Una vez que la aplicación esté en funcionamiento, puedes acceder a la API a través de las rutas definidas en los archivos de enrutamiento.

## Ejemplos de Uso

Puedes realizar solicitudes a la API utilizando herramientas como cURL, Postman o desde un cliente HTTP en tu lenguaje de programación favorito. A continuación, se muestran algunos ejemplos básicos:

- Obtener todos los bonsáis:
GET /api/bonsais

- Crear un nuevo bonsái:
POST /api/bonsais
Content-Type: application/json

{
  "specie": "Pino",
  "abonated": "2021-05-03",
  "trasplanted": "2022-03-11",
  "note": "Pequeño"
}

- Actualizar un bonsái existente:
PUT /api/bonsais/{id}
Content-Type: application/json

{
  "specie": "Pino",
  "abonated": "2021-05-03",
  "trasplanted": "2022-03-11",
  "note": "Pequeño"
}

- Eliminar un bonsái existente:
DELETE /api/bonsais/{id}

## Documentación de Postman

https://documenter.getpostman.com/view/32563829/2sA2xpRURf

## Pruebas

Para ejecutar las pruebas automatizadas, utiliza el siguiente comando:

`npm test`


## Contribuyendo

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commits (`git commit -am 'Agrega una nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.
<!-- 
## Documentación de API

La documentación completa de la API está disponible en [docs/api.BeatrizMercado](docs/api.md). -->

## FAQ

- **¿Cómo puedo configurar la conexión a la base de datos?**
  Puedes configurar la conexión a la base de datos editando el archivo `config.js`.

- **¿Cómo puedo ejecutar la aplicación en un entorno de producción?**
  Puedes ejecutar la aplicación en un entorno de producción utilizando herramientas como Mysql.



## Repositorios de GitHub 

- [SarayAntaay](https://github.com/SarayAnta)
- [rebecavm28a](https://github.com/rebecavm28)
- [BeatrizMercado](https://github.com/BeatrizMercado)
- [NuriaVicenteRodriguez](https://github.com/NuriaVicenteRodriguez)

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).