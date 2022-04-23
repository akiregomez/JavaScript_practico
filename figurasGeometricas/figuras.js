//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;

}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * PI).toFixed(2);
}

function areaCirculo(radio) {
    return ((radio * radio) * PI).toFixed(2);
}
console.groupEnd();

//Aqui interactuamos con el html
//cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const perimetro_cuadrado = document.getElementById("perimetro_cuadrado");
    perimetro_cuadrado.innerText = ("El perimetro de " + value + " es " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const area_cuadrado = document.getElementById("area_cuadrado");
    area_cuadrado.innerText = ("El área de " + value + " es " + area);
}

//circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetroCir = perimetroCirculo(value);

    const perimeto_circulo = document.getElementById("perimetro_circulo");
    perimeto_circulo.innerText = ("El perímetro de " + value + " es: " + perimetroCir);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const areaCir = areaCirculo(value);

    const area_circulo = document.getElementById("area_circulo");
    area_circulo.innerText = ("El área de " + value + " es: " + areaCir);
}

//triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo-lado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo-lado2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("inputTriangulo-base");
    const base = Number(input3.value);

    const perimetro = lado1 + lado2 + base;

    const perimetro_triangulo = document.getElementById("perimetro_triangulo");
    perimetro_triangulo.innerText = ("El perímetro es: " + perimetro);

}

function alturaIsosceles(lado1, base) {
    return Math.sqrt((lado1 * lado1) - ((base * base) / 4));
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo-lado1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo-lado2");
    const value2 = input2.value;

    const input3 = document.getElementById("inputTriangulo-base");
    const value3 = input3.value;

    if ((value1 === value2) && (value1 != value3)) {
        const altura = alturaIsosceles(value1, value3);
        const area = areaTriangulo(value3, altura).toFixed(2);

        const area_triangulo = document.getElementById("area_triangulo");
        area_triangulo.innerText = ("El área es: " + area);

    } else {
        const area_triangulo = document.getElementById("area_triangulo");
        area_triangulo.innerText = ("No es triángulo isósceles");
    }
}