'use strict'

describe('Ejercicio 1', function(){
    it('aleatorio', function(){
        let a = 1, b = 100;
        let resultado;

        
        resultado = numAleatorio(a,b);

        expect(resultado).toBeLessThan(b);
        expect(resultado).toBeGreaterThanOrEqual(a);
    });

    it('No son numeros', function(){
        let a = undefined, b = "hola";
        let resultado;

        
        resultado = numAleatorio(a,b);

        expect(resultado).toBeNaN();
        
    })
})


describe('Ejercicio 2: Adivina el Número', () => {
    let juego = null;
    const NUM_INTENTOS = 10;

    beforeAll(() => {
        spyOn(Math, 'random').and.returnValue(0.83435)
    });

    beforeEach(() => {
        juego = new JuegoConClase(NUM_INTENTOS, 100);
    });

    it('Mi número es mayor.', () => {
        juego.PruebaCon(82)
        expect(juego.mensaje).toBe('Mi número es mayor.')
        expect(juego.intentos).toBe(1)
        expect(juego.encontrado).toBeFalse()
    });

    it('Mi número es menor.', () => {
        juego.PruebaCon(84)
        juego.PruebaCon(84)
        expect(juego.mensaje).toBe('Mi número es menor.')
        expect(juego.intentos).toBe(2)
        expect(juego.encontrado).toBeFalse()
    });

    it('Intentos', () => {
        for(let i = 1; i < NUM_INTENTOS; i++) {
            juego.PruebaCon(1)
            expect(juego.intentos).toBe(i)
        }
        juego.PruebaCon(1)
        expect(juego.mensaje).toBe('Upsss! Se acabaron los intentos, el número era el 83')
        expect(juego.intentos).toBe(NUM_INTENTOS)
        expect(juego.encontrado).toBeFalse()
    });

    it('Bieeen!!! Acertaste.', () => {
        juego.PruebaCon(83)
        expect(juego.mensaje).toBe('Bieeen!!! Acertaste.')
        expect(juego.encontrado).toBeTrue()
    });

    it('Excedido el numero de intentos', () => {
        for(let i = 0; i < NUM_INTENTOS; i++) {
            juego.PruebaCon(1)
        }
        expect(() => juego.PruebaCon(1)).toThrow()
        expect(juego.intentos).toBe(NUM_INTENTOS)
        expect(juego.encontrado).toBeFalse()
    });

    xit('No es un número', () => {
        juego.PruebaCon('otra cosa')
        expect(juego.intentos).toBe(0)
        expect(juego.encontrado).toBeFalse()
    });

})

describe('Ejercicio 3'), () => {
    it('Que sea numero', () => {
        let num = 2;
        let num2 = "2";

        expect(isNaN(num)).toBeFalse();
        expect(isNaN(num2)).toBeFalse();   
    })
    
    it('Que no sea numero', () => {
        let num = undefined;
        let num2 = "no es numero";

        expect(isNaN(num)).toBeTrue();
        expect(isNaN(num2)).toBeTrue();   
    })
}

/*describe('Ejercicio 4', () => {
    it('E')
})

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