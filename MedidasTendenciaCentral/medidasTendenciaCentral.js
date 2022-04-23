function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


//-------------------------------------SECCIÓN MEDIA
function calcularMedia() {
    const entradaMedia = document.getElementById("inputMedia");
    const mediaValue = entradaMedia.value;

    const arrayMedia = Array.from(mediaValue.split(","), Number);

    const promedio = calcularMediaAritmetica(arrayMedia);

    const resultadoPromedio = document.getElementById("resultadoMedia");
    resultadoPromedio.innerText = ("El promedio de los datos ingresados es: " + promedio);
}
//-------------------------------------SECCIÓN MEDIANA
function calcularMediana() {
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value;

    // Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayMediana = Array.from(medianaValue.split(","), Number);

    //   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);

    // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
    const mitadLista = parseInt(listaOrdenada.length / 2);
    //   console.log(mitadLista);

    let mediana;
    // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
}
//-------------------------------------SECCIÓN MODA
function calcularModa() {
    const entradaModa = document.getElementById("inputModa");
    const modaValue = entradaModa.value;

    const lista1 = Array.from(modaValue.split(","), Number);

    const lista1Count = {};

    lista1.map(
        function(elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;

            }

        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    const moda = lista1Array[lista1Array.length - 1];

    const resultadoModa = document.getElementById("resultadoModa");
    resultadoModa.innerText = `El valor que más se repite es:  ${ moda[0] }`;
}

//-------------------------------------SECCIÓN MEDIA PONDERADA 
function promedioPonderado(suma, numero) {
    return suma / numero;
}
notes = [];
const agregarDatos = (entrada) => {
    entrada.preventDefault();
    let informacion = {
        course: document.getElementById("salario-course").value,
        note: document.getElementById("salario-note").value,
        credit: document.getElementById("salario-credit").value
    }

    notes.push(informacion);
    document.forms[3].reset();

}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("buttonPonderado").addEventListener('click', agregarDatos);
});

function calcularPromedioPonderado() {
    const notasCreditos = notes.map(
        function(obj) {
            return obj.note * obj.credit;
        }
    );
    const suma = notasCreditos.reduce(
        function(suma = 0, nuevoValor) {
            return suma + nuevoValor;
        }
    );

    const sumaCreditos = notes.map(
        function(obj) {
            return Number(obj.credit);
        }
    );

    const sumatoriaCreditos = sumaCreditos.reduce(
        function(suma = 0, nuevoValor) {
            return suma + nuevoValor;
        }
    );

    const promedio = promedioPonderado(suma, sumatoriaCreditos).toFixed(2);

    const mostrarPromedio = document.getElementById("resultadoPromedioPonderado");
    mostrarPromedio.innerText = ("El promedio ponderado es: " + promedio);
}