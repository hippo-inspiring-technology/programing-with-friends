var precios = [43.3, 22.4, 0.4, 33,23,89,123,2,1];
var preciosOrdenados = []
// 1. Leer los valores del array
for (var i = 0; i < precios.length; i++){
    var precio = precios[i];
    var menorValorParaLaPosicion = precio
    for (var j = 0; j < precios.length; j++){
        var precioComparacion = precios[j];
        if (precioComparacion < menorValorParaLaPosicion) {
                var precioAnterior = precios[j-1];
                if(menorValorParaLaPosicion >= precioAnterior){
                    menorValorParaLaPosicion = precioComparacion;
                }
        }
    }
    preciosOrdenados[i] = menorValorParaLaPosicion
    // if (precio > referenciaMayorPrecio) {
    //     referenciaMayorPrecio = precio;
    // }
}

console.log("Pecios Ordenados: " + preciosOrdenados);
// 2. Obtener el menor valor
