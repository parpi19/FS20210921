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

    console.log(adivinar());
    


