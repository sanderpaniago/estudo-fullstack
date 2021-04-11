
const jurosSimples = (capital, taxaJuro, tempo) => Number((capital * taxaJuro * tempo).toFixed(2))

const montanteSimples = ({jurosSimples}) =>  (capital, taxaJuro, tempo) => Number(capital + jurosSimples(capital, taxaJuro, tempo))

const montanteJurosComposto = (capital, taxaJuro, tempo) =>Number((capital * Math.pow((1 + taxaJuro), (tempo/12))).toFixed(2))

const calcJurosComposto = ({montanteJurosComposto}) =>  (capital, taxaJuro, tempo)=> Number((montanteJurosComposto(capital, taxaJuro, tempo) - capital).toFixed(2))

module.exports = {
    jurosSimples, 
    montanteSimples: montanteSimples({jurosSimples}), 
    montanteJurosComposto, 
    calcJurosComposto: calcJurosComposto({montanteJurosComposto}),
    pure: { 
        montanteSimples,
        calcJurosComposto
    }
}
