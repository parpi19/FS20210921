'use strict'

describe('Ejercicio 1', function(){
    it('aleatorio', function(){
        let a = 1, b = 100;
        let resultado;

        
        resultado = numAleatorio(a,b);

        expect(resultado).toBeLessThan(b);
        expect(resultado).toBeGreaterThanOrEqual(a);
    })
})

describe('Ejercicio 2', function (){
    

}