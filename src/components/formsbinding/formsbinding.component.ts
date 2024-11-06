import { Component } from "@angular/core";

@Component ({
  selector: "app-forms-binding",
  templateUrl: "./formsbinding.component.html"
})

export class FormsBindingComponent {
  //todo: declaramos un objeto para realizar el binding en un form html
  public user: any;
  public mensaje: string;

  constructor() {
    //todo: inicializamos los objetos
    this.user = {
      nombre: "",
      apellidos: "",
      edad: 0
    }

    this.mensaje = "";

  }

  recibirDatos(): void {
    this.mensaje = "Datos recibidos";
  }
}