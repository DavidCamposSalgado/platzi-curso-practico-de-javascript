//Codigo del cuadrado
const perimetroCuadrado = lado => lado * 4
const areaCuadrado = lado => lado * lado

function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value;
    const perimetro = perimetroCuadrado(value)

    alert(perimetro)    
}
function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)

    alert(area)   
}


//Codigo del triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
const areaTriangulo = (base, altura) => (base * altura) / 2

function calcularPerimetroTriangulo() {
    const inputLado1 = document.querySelector('#inputTrianguloLado1')
    const valueLado1 = Number(inputLado1.value)

    const inputLado2 = document.querySelector('#inputTrianguloLado2')
    const valueLado2 = Number(inputLado2.value)

    const inputBase = document.querySelector('#inputTrianguloBase')
    const valueBase = Number(inputBase.value)


    if ( valueLado1 != valueLado2 || valueLado1 == valueBase || valueLado2 == valueBase) {
        alert('Revisar los lados ingresados ')
        return
    }
    
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const inputLado1 = document.querySelector('#inputTrianguloLado1')
    const valueLado1 = Number(inputLado1.value)

    const inputLado2 = document.querySelector('#inputTrianguloLado2')
    const valueLado2 = Number(inputLado2.value)

    const inputBase = document.querySelector('#inputTrianguloBase')
    const valueBase = Number(inputBase.value)


    if ( valueLado1 != valueLado2 || valueLado1 == valueBase || valueLado2 == valueBase) {
        alert('Revisar los lados ingresados ')
        return
    }

    const valueAltura =  Math.sqrt( (valueLado1 * valueLado1) - ( (valueBase / 2) * (valueBase / 2) ) )

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area)
}


//Codigo del circulo
const PI = Math.PI
const diametroCirculo = (radio) => radio * 2

const perimetroCirculo = (radio) => {
    diametro = diametroCirculo(radio)
    return diametro * PI
}

const areaCirculo = (radio) => PI * (radio * radio)



