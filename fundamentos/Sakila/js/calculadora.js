class Calculadora {
  constructor() {
    this.pantalla = "0";
    this.acumulado = 0;
    this.operador = "";
    this.resultado = true;
  }

  ponerdigito(num) {
    if (this.pantalla == "0" || this.resultado) {
      this.pantalla = num;
      this.resultado = false;
    } else {
      this.pantalla += num;
      
    }
  }

  calcular(operacion){
    let valor=parseFloat(this.pantalla);
    switch(this.operador){
      case '+': this.acumulado += valor; break;
      case '-': this.acumulado -= valor; break;
      case '*': this.acumulado *= valor; break;
      case '/': this.acumulado /= valor; break;
    }
    this.operador = operacion;
    this.resultado = true;
    this.pantalla = this.acumulado.toString();
  }
 
}
