function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function ( valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

function calcularMediana (lista) {
    listaOrdenada = lista.sort((a,b)=>a-b)
    mitadLista = parseInt( lista.length / 2 )

    function esPar (number) {
        if (number % 2 === 0 ) {
            return true
        } else {
            return false
        }
    }

    let mediana
    if ( esPar(lista.length) ) {
        const elemento1 = listaOrdenada[mitadLista - 1]
        const elemento2 = listaOrdenada[mitadLista]

        mediana = calcularMediaAritmetica( [elemento1, elemento2] )
        
    } else {
        mediana =  listaOrdenada[mitadLista]
    }
    return mediana
}

