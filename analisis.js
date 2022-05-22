//HELPERS
function esPar(numero) {
    return ( numero % 2 === 0 )
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

//CALCULADORA DE LA MEDIANA
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2)

    if ( esPar(lista.length )) {
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana
    } else {
        const mediana = mitad
        return lista[mediana]
    }
}

//MEDIANA GENERAL
const salariosCol =  colombia.map(
    function (persona) {
        return persona.salary
    }
)

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB
    }
)

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//MEDIANA DEL TOP 10% 
const spliceStart = parseInt( salariosColSorted.length * .9 )
const spliceCount = salariosColSorted.length - spliceStart

const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col = medianaSalarios(salarioColTop10)


console.log({
    medianaGeneralCol,
    medianaTop10Col
});;