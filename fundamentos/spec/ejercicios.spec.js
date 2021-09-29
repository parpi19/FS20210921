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


describe('Ejercicio 3'), () => {
    it('Que sea numero', () => {
        let num = 2;
        let num2 = "2";

        expect(esNum(num)).toBeFalse;
        expect(esNum(num2)).toBeFalse;   
    })
    
    it('Que no sea numero', () => {
        let num = undefined;
        let num2 = "no es numero";

        expect(esNum(num)).toBeTrue;
        expect(esNum(num2)).toBeTrue;   
    })
}

/*describe('Ejercicio 6', function (){
    ['ana','oso', 'Sometamos o matemos', 'Isaac no ronca así'].forEach(caso => {
        it(`Palindromo valido: ${caso}`, () => {
            let caso = 'ana';

            expect(validaPalindromo(caso)).toBeTrue()
        });
    })

        it('palindromo malo', () => {
            let caso = 'invalido';
            expect(validaPalindromo(caso)).toBeFalse()
            
        });
    })
})*/