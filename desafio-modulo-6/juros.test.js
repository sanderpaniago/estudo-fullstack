const { expect, jest } = require('@jest/globals')
const {jurosSimples, montanteSimples, montanteJurosComposto, calcJurosComposto, pure} = require('./juros')

test('calculo juros simples', ()=> {
    expect(jurosSimples(1200, 0.02, 10)).toBe(240.00)
})

test('calculo montante', ()=> {
    const capital = 1200
    const taxaJuro = 0.02
    const tempo = 10
    const montanteEsperado = 1440 

    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(()=> 240)

    const montanteSimples = pure.montanteSimples({jurosSimples})
    const montante = montanteSimples(capital, taxaJuro, tempo)

    expect(jurosSimples.mock.calls[0]).toEqual([capital, taxaJuro, tempo])
    expect(montante).toBe(montanteEsperado)
})

test('calculo montante juros composto', ()=> {
    expect(montanteJurosComposto(1400, 0.07, 24)).toBe(1602.86)
})

test('caculo juros compostos', ()=> {    
    const capital = 1400
    const taxaJuro = 0.07
    const tempo = 24
    const jurosEsperado = 202.86

    const montanteJurosComposto = jest.fn()
    montanteJurosComposto.mockReturnValue(1602.86)

    const jurosComposto = pure.calcJurosComposto({montanteJurosComposto})
    const juros = jurosComposto(capital, taxaJuro, tempo)

    expect(juros).toBe(jurosEsperado)
})