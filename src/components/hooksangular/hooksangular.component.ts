import { Component, OnInit } from "@angular/core";

@Component ({
  selector: "hooks-angular",
  templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
  public mensaje: string;

  constructor() {
    this.mensaje = "Soy Hooks en Angular";

    console.log("Soy el constructor de Hooks Angular");
  }

  ngOnInit(): void {
      console.log("soy el metodo ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Ejecutando el método ngDoCheck");
  }

  cambiarMensaje(): void {
    this.mensaje = "Cambiando el mensaje en un click!";
  }
}