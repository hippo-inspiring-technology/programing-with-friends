// Hacer un programa que me diga si me conviene comprar algo en cuotas o al contado
/*

Precio de lista del producto = 41.989
Cantidad de cuotas = 12
Precio del producto en cuotas = 67.388,16
inflación mensual = 4%


diferencia vs lista = 25400 = 60% arriba del precio de lista
Tasa de interes
Dolar blue
costo de mantenimiento de tarjeta
*/
var misArgumentos = process.argv.slice(2);

var precioDeLista = parseFloat(misArgumentos[0]);
var cantidadDeCuotas = parseInt(misArgumentos[1]);
var precioPorCuotas = parseFloat(misArgumentos[2]);
var inflacionMensualEstimada = parseFloat(misArgumentos[3]);

const precioPorCantidadDeCuotas = precioPorCuotas * cantidadDeCuotas;
console.log("Precio en cuotas: " + precioPorCantidadDeCuotas); 
//const diferenciaEntrePrecios = precioPorCantidadDeCuotas - precioDeLista;

//const porcentajeArribaDelPrecioDeLista = (diferenciaEntrePrecios * 100) / precioDeLista;

//const inflacionPorCantidadDeCuotas = cantidadDeCuotas * inflacionMensualEstimada;

var precioDeListaAjustadoPorInflacion = PrecioAjustadoPorInflacion(precioDeLista, cantidadDeCuotas, inflacionMensualEstimada);

const tengoQueComprar = precioDeListaAjustadoPorInflacion > precioPorCantidadDeCuotas;

if (tengoQueComprar) {
    console.log("Compralo"); 
} else {
    console.log("Ta Caro, no lo compres");
}

function PrecioAjustadoPorInflacion(precioDeLista, cantidadDeMeses, inflacionMensual) {
    var precioDeListaAjustadoPorInflacion = precioDeLista;

    for (var mes = 0; mes < cantidadDeMeses; mes = mes + 1){
        precioDeListaAjustadoPorInflacion = precioDeListaAjustadoPorInflacion * (1 + inflacionMensual);
    }

    return precioDeListaAjustadoPorInflacion;
}
