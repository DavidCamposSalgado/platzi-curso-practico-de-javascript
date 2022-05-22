const calcularPrecioConDescuento = (precio, descuento) =>  {
    const porcentajeDelPrecioConDescuento = 100 - descuento
    const precioConDescuento = ( precio * porcentajeDelPrecioConDescuento ) / 100
    
    return precioConDescuento
}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice')
    const valuePrice = inputPrice.value

    const inputCoupon = document.getElementById('inputCoupon')
    const valueCoupon = inputCoupon.value

    const isCouponValueValid = (coupon) => coupon.name === valueCoupon
    const userCoupon = coupons.find(isCouponValueValid)

    if (!userCoupon) {
        alert("El cupón " + valueCoupon + " no es válido");
    } else {
        const valueDiscount = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
    
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = `El precio con descuento son: ${precioConDescuento}`
    }
}
