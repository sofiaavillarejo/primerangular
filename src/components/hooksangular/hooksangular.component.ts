import { Component, OnInit } from "@angular/core";

@Component ({
  selector: "hooks-angular",
  templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
  constructor() {
    console.log("Soy el constructor de Hooks Angular");
  }

  ngOnInit(): void {
      console.log("soy el metodo ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Ejecutando el método ngDoCheck");
  }
}