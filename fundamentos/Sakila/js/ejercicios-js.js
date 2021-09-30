function numAleatorio(minimo, maximo) {
  return parseInt(Math.random() * (maximo - minimo) + minimo);
}

console.log("El numeor aleatorio del Ejercicio 1 es: " + numAleatorio(0, 100));

function compara(numeroA, numeroB) {
  if (numeroA == numeroB) {
    return "son iguales";
  } else if (numeroA < numeroB) {
    return "es mayor";
  } else {
    return "es menor";
  }
}
function adivinar() {
  let numeroAleatorio = numAleatorio(1, 5);
  let contador = 5;
  let numeroIntroducido;
  do {
    numeroIntroducido = prompt(
      `Ingrese un número (quedan ${contador} intentos):`
    );
    let a = compara(numeroIntroducido, numeroAleatorio);
    if (a == "es menor") {
      alert("El numero introducido es mayor ");
    } else if (a == "es mayor") {
      alert("El numero introducido es menor");
    } else {
      alert("Has acertado el número");
    }
    contador--;
  } while (numeroAleatorio != numeroIntroducido && contador > 0);
}
//console.log(adivinar());

function devolverArray(longitud, valor) {
  let array = [];
  if (isNaN(longitud) === false) {
    for (let contador = 0; contador < longitud; contador++) {
      array.push(valor);
    }
    return array;
  }
}
console.log(devolverArray("7", "al"));

function esPrimo(numero) {
  if (numero == 0 || numero == 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) return false;
  }
  return true;
}

function numerosPrimos(a, b) {
  let arrayPrimos = [];
  for (let i = a; i < b; i++) {
    if (esPrimo(i)) {
      arrayPrimos.push(i);
    }
  }
  return arrayPrimos;
}

console.log(numerosPrimos(0, 50));

function validaPalindromo(caso) {
  return true;
}



function Juego(maxIntentos, valores) {
  var numeroBuscado;
  this.intentos;
  this.encontrado;
  this.mensaje;
  this.Inicializa = function () {
      numeroBuscado = aleatorio(1, valores);
      this.intentos = 0;
      this.encontrado = false;
      this.mensaje = 'Listo para jugar';
  }

  this.Inicializa();

  this.PruebaCon = function (numeroIntroducido) {
      if (this.intentos >= maxIntentos)
          throw new Error("Excedido el numero de intentos");
      this.intentos += 1;
      if (numeroBuscado == numeroIntroducido) {
          this.encontrado = true;
          this.mensaje = 'Bieeen!!! Acertaste.';
          return this.mensaje;
      }
      if (this.intentos >= maxIntentos) {
          this.mensaje = 'Upsss! Se acabaron los intentos, el número era el ' + numeroBuscado;
          return this.mensaje;
      }
      if (numeroBuscado > numeroIntroducido) {
          this.mensaje = 'Mi número es mayor.';
          return this.mensaje;
      }
      this.mensaje = 'Mi número es menor.';
      return this.mensaje;
  }
  this.DameMaxIntentos = function () { return maxIntentos; }
}

//Juego.prototype.DameMaxIntentos = function() { return maxIntentos; }
Juego.prototype.DameIntento = function () { return this.intentos + 1; }

class JuegoConClase {
  #maxIntentos;
  #valores;
  #numeroBuscado;
  constructor(maxIntentos, valores) {
      this.#maxIntentos = maxIntentos;
      this.#valores = valores;
      this.Inicializa();
  }
  Inicializa() {
      this.#numeroBuscado = aleatorio(1, this.#valores);
      this.intentos = 0;
      this.encontrado = false;
      this.mensaje = 'Listo para jugar';
  };
  PruebaCon(numeroIntroducido) {
      if (this.intentos >= this.#maxIntentos)
          throw new Error("Excedido el numero de intentos");
      this.intentos += 1;
      if (this.#numeroBuscado == numeroIntroducido) {
          this.encontrado = true;
          this.mensaje = 'Bieeen!!! Acertaste.';
          return this.mensaje;
      }
      if (this.intentos >= this.#maxIntentos) {
          this.mensaje = 'Upsss! Se acabaron los intentos, el número era el ' + this.#numeroBuscado;
          return this.mensaje;
      }
      if (this.#numeroBuscado > numeroIntroducido) {
          this.mensaje = 'Mi número es mayor.';
          return this.mensaje;
      }
      this.mensaje = 'Mi número es menor.';
      return this.mensaje;
  };

  DameMaxIntentos() { return this.#maxIntentos; }

  get maxIntentos() { return this.#maxIntentos; };

  get intento() { return this.intentos + 1; }
}