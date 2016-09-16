# ng2electron
Sample Heroes application using Angular2 and angular-cli to build. App can run both on Browser and Electron.

## Generate project
`ng new ng2electron`
## Generate modules
`ng generate <component|service|pipe>`
## Port to Electron
. added `main.electron.js` as main process to run Electron application
. added `"main" : "main.electron.js"` to `package.json`
. adjusted `index.html` to include `<base href="/">` dynamically
```
  <script>
    let baseHref = "/";
    if(typeof process !== 'undefined' && 
      typeof process.versions.electron !== 'undefined'){
      let path = require("path");
      baseHref = "/" +__dirname.split(path.sep).join(path.posix.sep) + "/";
    }
    document.write("<base href=\""+baseHref+"\" >");
  </script>
```
## Running the Application
`npm serve` - runs application in development mode
`npm build && electron .` - builds and runs application as Electron app

`ng serve` - runs project on http://localhost:4200
`ng build` - builds project into dist folder
`ng build --bh /url/` - specifies BASE URL of index page
`electron .` - to run the app in Electron, (note: need to build app everytime)

`ng set defaults.styleExt scss` - to set CSS styles for existing project
`ng new sassy-project --style=sass` - to create new project with sass

## 3rd Pary library installation
``
npm install d3 --save
npm install @types/d3 --save-dev
``

## Global Library installation
``
npm install bootstrap@next
``
adjust ``angular-cli.json``
``
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/tether/dist/js/tether.js",
  "../node_modules/bootstrap/dist/js/bootstrap.js"
],
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.css"
],
``