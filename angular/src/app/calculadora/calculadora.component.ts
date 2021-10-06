import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  miPantalla: string = '';
  limpiar = true;
  acumulado = 0;
  operador = '+';

  constructor() {

  }

  inicia(): void {
    this.acumulado = 0;
    this.operador = '+';
    this.miPantalla = '0';
    this.limpiar = false;
  }

  ponComa (): void {
		if (this.limpiar) {
			this.miPantalla = '0.';
			this.limpiar = false;
		} else if (this.miPantalla.indexOf('.') === -1) {
			this.miPantalla += '.';
		} else
			console.warn('Ya está la coma');
	};

  ponerdigito(numero: string): void {
    if (this.miPantalla == '0' || this.limpiar) {
      this.miPantalla = numero;
      this.limpiar = false;
    } else {
      this.miPantalla += numero;
    }
  }

  calcular(operacion: string): void {
    if ('+-*/='.indexOf(operacion) == -1) return;
    let valor = parseFloat(this.miPantalla);
    switch (this.operador) {
      case '+':
        this.acumulado += valor;
        break;
      case '-':
        this.acumulado -= valor;
        break;
      case '*':
        this.acumulado *= valor;
        break;
      case '/':
        this.acumulado /= valor;
        break;
    }
    this.operador = operacion;
    this.limpiar = true;
    this.miPantalla = this.acumulado.toString();
  }

  cambiaSigno(): void {
    this.miPantalla = (-this.miPantalla).toString();
    if (this.limpiar) {
      this.acumulado = -this.acumulado;
    }
  }

  borraPantalla ():void{
    this.miPantalla = '0';
  }

  borrarTodo (): void{
    this.miPantalla = '0';
    this.operador = '+';
    this.limpiar = true;
  }

  borrar(): void {
    if (
      this.limpiar ||
      this.miPantalla.length == 1 ||
      (this.miPantalla.length == 2 && this.miPantalla.startsWith('-'))
    ) {
      this.miPantalla = '0';
      this.limpiar = true;
    } else
      this.miPantalla = this.miPantalla.substr(0, this.miPantalla.length - 1);
  }
  ngOnInit(): void {}
}
