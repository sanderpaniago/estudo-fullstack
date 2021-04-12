const {calculoJuros} = require('./juros')
const expect = require('chai').expect

describe('Modulo Juros', ()=> {
    it('Calcula juros compostos', ()=> {
        const juros = calculoJuros(1000, 0.01, 1)
        expect(juros).to.equal(1010)
    })
})