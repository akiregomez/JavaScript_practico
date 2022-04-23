function precioConDescuento(precio, descuento) {
    const nuevoPrecio = (precio * (100 - descuento)) / 100;
    return nuevoPrecio;
}

function calcularDescuento() {
    const input1 = document.getElementById("InputPrice");
    const precio = input1.value;
    const input2 = document.getElementById("InputDiscount");
    const descuento = input2.value;

    const precioDesc = precioConDescuento(precio, descuento);

    const finalPrice = document.getElementById("finalPrice");
    finalPrice.innerText = ("Tu precio con un descuento del " + descuento + "% es: $" + precioDesc);

}

function calcularDescuento2() {
    const input1 = document.getElementById("InputPrice2");
    const precio = input1.value;
    const input2 = document.getElementById("InputDiscount2");
    const descuento = input2.value;

    const precioDesc = precioConDescuento(precio, descuento);

    const finalPrice = document.getElementById("finalPrice2");
    finalPrice.innerText = ("Tu precio con un descuento del " + descuento + "% es: $" + precioDesc);

}

function calcularDescuento3() {
    const input1 = document.getElementById("InputPrice3");
    const precio = input1.value;
    const input2 = document.getElementById("InputDiscount3");
    const descuento = input2.value;

    const precioDesc = precioConDescuento(precio, descuento);

    const finalPrice = document.getElementById("finalPrice3");
    finalPrice.innerText = ("Tu precio con un descuento del " + descuento + "% es: $" + precioDesc);

}

function precioConCupon(precio, descuento, cupon) {
    const precioCupon = (precio * (100 - descuento - cupon)) / 100;
    return precioCupon;
}

let cupones = [
    "SuperSale7080BC", "GiftVoucherXX0149", "GetVoucherPQ4389",
]



function precioCupon() {
    const input2 = document.getElementById("InputDiscount");
    const firstDiscount = input2.value;

    const input1 = document.getElementById("InputPrice");
    const precio = input1.value;

    const input = document.getElementById("InputCupon");
    const cuponNumber = input.value;

    let descuento;


    switch (cuponNumber) {
        case cupones[0]:
            descuento = 10;
            const precioDesc = precioConCupon(precio, firstDiscount, descuento);
            const resultadoP = document.getElementById("precioConCupon");
            resultadoP.innerText = "El precio con descuento y cupón es: $" + precioDesc;
            break;

        case cupones[1]:
            descuento = 30;
            const precioDesc1 = precioConCupon(precio, firstDiscount, descuento);
            const resultadoP1 = document.getElementById("precioConCupon");
            resultadoP1.innerText = "El precio con descuento y cupón es: $" + precioDesc1;

            break;
        case cupones[2]:
            descuento = 25;
            const precioDesc2 = precioConCupon(precio, firstDiscount, descuento);
            const resultadoP2 = document.getElementById("precioConCupon");
            resultadoP2.innerText = "El precio con descuento y cupón es: $" + precioDesc2;
            break;
    }




}