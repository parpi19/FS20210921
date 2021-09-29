function numAleatorio (a, b){
    return parseInt(Math.random() * (b - a) + a);
}

console.log("El numeor aleatorio del Ejercicio 1 es: "+ numAleatorio(0,100));

function compara(a,b){
    if(a==b) {
        return "son iguales"
    }else if(a < b){
        return "es mayor"
    }else {
        return "es menor"
    }

function isNum(a) {
    
}

}
function adivinar(){
    let numeroAleatorio = numAleatorio(1,5);
    let contador = 5;
    let numeroIntroducido;
    do {
        numeroIntroducido = prompt(
          `Ingrese un número (quedan ${contador} intentos):`
        );
        let a = compara(numeroIntroducido, numeroAleatorio);
        if (a == "es menor"){
            alert("El numero introducido es mayor ");
            
        }else if (a == "es mayor"){
            alert("El numero introducido es menor");
            
        }else {
            alert("Has acertado el número");
            
        }
        contador --;
      } while(numeroAleatorio != numeroIntroducido && contador > 0);

}
 // console.log(adivinar());

function esNum(b) {
    if(typeof(b)=== "number"){
        return true;
    }else{         
        return false;   
    }
    
}
function devolverArray(a) {
    let array = [];
    if(typeof a === "number"){
        for(let contador = 0; contador < a; contador++){
            array.push(` ${contador+1}`);
        }
          alert(array);
    }else 
    alert("No es un numero");
    
  }
console.log(devolverArray(4));


function validaPalindromo(caso) {
    return true;
    
}