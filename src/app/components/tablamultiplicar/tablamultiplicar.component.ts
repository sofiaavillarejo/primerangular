import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {
  @ViewChild("cajanum") cajaNumRef: ElementRef;
  public multiplicacion: number;
  public aux: Array<number>;

  constructor() {
    this.multiplicacion = 0;
    this.cajaNumRef = new ElementRef(0);
    this.aux = new Array<number>();
  }

  tablaMultiplicar() {
    this.aux = [];
    let num = this.cajaNumRef.nativeElement.value;
    for (let i = 0; i < 11; i++) {
      this.multiplicacion = num * i;
      this.aux.push(this.multiplicacion);
    }
    console.log(this.aux)
  }
}
