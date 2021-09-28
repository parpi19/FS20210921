describe('Demos de las pruebas', function(){
    describe('Calculos', function(){
        it('suma 2 + 2',function(){
            let a = 2, b = 2;
            let rslt;

            rslt = suma(a, b);

            expect(rslt).toBe(4)
        })

        it('suma negativo',function(){
            let a = 2, b = -2;
            let rslt;

            rslt = suma(a, b);

            expect(rslt).toBe(0)
        })

        it('esto queda pendiente')

        describe('sumas', function() {
            [[2,2,4], [-1,2,1], [2,-1,1], [0,0,0], [0.1, 0.2, 0.3], ['a', 'b', 'ab']].forEach(caso => {
                it(`Suma ${caso[0]} mas ${caso[1]} debe ser ${caso[2]}`, function() {
                    expect(suma(caso[0], caso[1])).toBeCloseTo(caso[2], 10)
                }) 
            });
            [['a', 'b']].forEach(caso => {
                it(`Suma erronea ${caso[0]} mas ${caso[1]}`, function() {
                    expect(suma(caso[0], caso[1])).toThrow()
                }) 
            })
        })

        fdescribe('divisiones', function() {
            [[4,2,2], [4,0,2], ['a', 'b', NaN]].forEach(caso => {
                it(`Division: ${caso[0]} dividido ${caso[1]} debe ser ${caso[2]}`, function() {
                    expect(divide(caso[0], caso[1])).toBe(caso[2])
                }) 
            })
        })
    })

    it('Este pasa siempre', function(){
        expect(true).toBeTruthy()
    })

    xit('Este falla siempre', function(){
        expect(true).not.toBeTruthy()
    })

})

describe('otra suite', function() {

})