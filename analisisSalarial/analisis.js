// // Helpers
function tratamientoDeDatos(array) {
    //filtrar los salarios
    const filtrarSalario = array.map(
        function(persona) {
            return persona.salary;
        }
    );

    //ordernar los salarios 
    const ordenarSalarios = filtrarSalario.sort(
        ((num1, num2) => num1 - num2)
    );

    return ordenarSalarios;
}

function esPar(numero) {
    return (numero.length) % 2 === 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaTop20(arrayOrdenado) {
    const primeraParte = parseInt((arrayOrdenado.length * 80) / 100);
    const segundaParte = parseInt(arrayOrdenado.length - primeraParte);

    const salariosTop20 = arrayOrdenado.splice(
        primeraParte,
        segundaParte
    );
    const promedioTop20 = calcularMediaAritmetica(salariosTop20);

    return promedioTop20;
}


function calcularPromedioSalary() {
    //Mediana de todo el pais
    let datosOrdenados = tratamientoDeDatos(country);
    let parImpar = esPar(datosOrdenados);
    let mitad = parseInt(datosOrdenados.length / 2);

    let mediana;
    if (parImpar) {
        const num1 = datosOrdenados[mitad - 1];
        const num2 = datosOrdenados[mitad];
        const promedioNumeros = calcularMediaAritmetica([num1, num2]);
        mediana = promedioNumeros;
    } else {
        mediana = datosOrdenados[mitad];
    }

    //Mediana del top 10 %
    const calculoTop20 = medianaTop20(datosOrdenados);

    //Resultado
    let medianaSalario = document.getElementById("mostrarSalarioPromedio");
    medianaSalario.innerText = ("El salario promedio del país es: $" + mediana + "\nEl promedio del top 10 es: $" + calculoTop20);
}