import { Component } from "@angular/core";

@Component ({
  selector: "app-deportes",
  templateUrl: "./deportes.component.html",
  styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
  public deportes: Array<string>;
  public numeros: Array<number>;

  constructor() {
    this.deportes = ["Baloncesto", "Fútbol", "Rugby", "Natación"];
    this.numeros = [1,5,6,4,7,8,9,22,33];
  }
}