import{ Component } from '@angular/core';

// todo: UN COMPONENT TENDRÁ LA DECLARACIÓN DE SU CONTENIDO
@Component({
  //todo: DEBEMOS DECLARAR EL NOMBRE DEL COMPONENT CON -
  selector: "primer-component",
  templateUrl: "./primer.component.html",
  styleUrl: "./primer.component.css"
})
  //todo: TODO COMPONENT DEBEDECLARARSE COMO CLASE Y ESTE NOMBRE DE CLASE,
  // todo: SE USARÁ DENTRO DE app.module.ts

  export class PrimerComponent {
    //todo: AQUÍ DECLARAMOS LAS VARIABLES QUE DESEEMOS
    //TODO: DICHAS VARIABLES SON CON TIPADOS
    public titulo: string;
    public descripcion: string;
    public anio: number;

    //todo: EN ANGULAR, TENEMOS UN CONSTRUCTOR PARA INICIALIZAR LAS VARIABLES O RECUEPRARLAS DE ALGUN SITIO
    constructor() {
      //todo: PARA ACCEDER A LAS PROPIEDADES DE UNA CLASE (VARIABLES),
      //todo: SE USA this
      this.titulo = "Hoy es miercoles";
      this.descripcion = "Hoy no llueve";
      this.anio = 2024;
    }
  }