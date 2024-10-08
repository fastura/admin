# Documentación Facturación Electrónica

Repositorio de documentación de nuestro sistema de facturación electrónica [Fastura](https://buho.la/fastura/). Aquí encontrarás guías y tutoriales para maximizar el uso de nuestra plataforma. 

Si estas colaborando con nosotros usa los siguientes comandos:

### Instalación

```
$ npm install
```

### Iniciar entorno Local

```
$ npm start
```
Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin tener que reiniciar el servidor.

### Build

```
$ npm build
```
Este comando genera contenido estático en el directorio `build` y se puede usar en cualquier hosting. Esta carpeta es ignorado en el repositorio.

La busqueda unicamente funciona cuando el servidor esta usando la carpeta build.

### Deployment

Usando SSH:

```
$ USE_SSH=true npm run deploy
```

Sin usar SSH:

```pwsh
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && npm run deploy'
```
Este comando (para windows) publica el contenido estatico a través de la rama `gh-pages`.


### Actualización de v2 hacia v3.5.2

#### Dependencias descargadas: 

- [docusaurus-lunr-search](https://github.com/praveenn77/docusaurus-lunr-search), este dependencia no funciona en el entorno de desarrollo, unicamente cuando se haga build de la documentación.
- [docusaurus-openapi-docs](), plugin para crear api a través de la especificación de [OpenAPi](https://swagger.io/specification/)
