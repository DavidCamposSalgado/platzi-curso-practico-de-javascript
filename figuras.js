//Codigo del cuadrado
const perimetroCuadrado = lado => lado * 4
const areaCuadrado = (lado) => lado * lado

function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value;
    const perimetro = perimetroCuadrado(value)

    alert(perimetro)    
}
function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value;
    const area = areaCuadrado(value)

    alert(area)   
}


//Codigo del triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base

const areaTriangulo = (base, altura) => (base * altura) / 2


//Codigo del circulo
const PI = Math.PI
const diametroCirculo = (radio) => radio * 2

const perimetroCirculo = (radio) => {
    diametro = diametroCirculo(radio)
    return diametro * PI
}

const areaCirculo = (radio) => PI * (radio * radio)



