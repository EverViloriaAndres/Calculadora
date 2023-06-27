import { Component } from '@angular/core';

@Component({
  selector: 'componentePrincipal',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css'],
})
export class ComponentPrincipal {
  protected title: string = 'Calculadora';
  protected numero1: number = 0;
  protected numero2: number = 0;
  protected resultado: number = 0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }
  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }
  dividir(): void {
    this.resultado = this.numero1 / this.numero2;
  }
  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }
  potencia(): void {
    this.resultado = Math.pow(this.numero1, this.numero2);
  }
  raiz(): void {
    this.resultado = Math.sqrt(this.numero1);
  }
}
