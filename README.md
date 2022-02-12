# Estudiando Angular

Este proyecto fue generado por [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## ¿Que es un componente en Angular?
En angular los componentes son similares a lo que teníamos en Angular JS que llamábamos Controller.

Un componente básicamente es un markup, meta-data y una clase, todo esto combinado crea una UI (User interface)

Los componentes tienen estilos, una logica, un fichero de testing y un markup que es el html.

Estos componentes se pueden reutilizar a lo largo de nuestra aplicación, por ejemplo, podemos crear un boton como componente y reutilizarlo en otros componentes.

## Crear un componente
ng generate component name-component

O podemos simplificarlo
ng g c name-component

## ¿Que es una directiva?
Las directivas son como atributos que pueden cambiar la apariencia o el comportamiento del DOM element.

## Tipos de directivas
- Estructurales:
  Se refiere a que pueden modificar elementos del DOM, por ejemplo, ocultar o mostrar una etiqueta HTML, un ejemplo de directivas estructurales son:
  - ngFor
  - ngIf

- De atributos

- Directivas customs

- Componentes - son directivas con template



















## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
