import { Component, ViewChild, ElementRef } from "@angular/core";

@Component ({
  selector: "app-sumar-numeros",
  templateUrl: "./sumarnumeros.component.html"
})

export class SumarNumerosComponent {
  //todo: DECLARAMOS VARIABLES PARA HACER REFERENCIA A LAS CAJAS DEL FORM (INPUTS) MEDIANTE SU ID DE ANGULAR
  @ViewChild("cajanum1") cajaNumero1Ref: ElementRef;
  @ViewChild("cajanum2") cajaNumero2Ref: ElementRef;
  public suma: number;

  //todo: EN ANGULAR, TODAS LAS PROPIEDADES DEBEN SER INSTANCIADAS/INICIADAS
  //todo: LOS OBJETOS DE REFERENCIA DEBEMOS UTILIZAR UNA SINTAXIS MEDIANTE SU CONSTRUCTOR (new) E INDICAR EL VALOR POR DEFECTO QUE 
  //todo: DESEAMOS QUE TENGAN LAS CAJAS
  constructor() {
    this.suma = 0;
    this.cajaNumero1Ref = new ElementRef(0);
    this.cajaNumero2Ref = new ElementRef(0);
  }
  sumarNumeros() {
    let num1 = this.cajaNumero1Ref.nativeElement.value;
    let num2 = this.cajaNumero2Ref.nativeElement.value;

    this.suma = parseInt(num1) + parseInt(num2);
  }
}