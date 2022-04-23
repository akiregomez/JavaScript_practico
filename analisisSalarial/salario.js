country = [];
const agregarDatos = (entrada) => {
    entrada.preventDefault();
    let informacion = {
        country: document.getElementById("input-pais").value,
        name: document.getElementById("input-name").value,
        salary: Number(document.getElementById("input-salary").value)
    }

    country.push(informacion);
    document.forms[0].reset();

}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("moreData").addEventListener('click', agregarDatos);
});