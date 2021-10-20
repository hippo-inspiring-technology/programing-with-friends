var precios = [43.3, 22.4, 0.4, 33,23,89,123,2,1];

var referenciaMayorPrecio = 0.0;
var referenciaMenorPrecio = 10000000.0;
// 1. Leer los valores del array
for (var i = 0; i < precios.length; i++){
    var precio = precios[i];
    if (precio < referenciaMenorPrecio) {
        referenciaMenorPrecio = precio;
    }
    if (precio > referenciaMayorPrecio) {
        referenciaMayorPrecio = precio;
    }
}

console.log("Menor valor: " + referenciaMenorPrecio);
console.log("Mayor valor: " + referenciaMayorPrecio);
// 2. Obtener el menor valor

// var value1 = 22.4

