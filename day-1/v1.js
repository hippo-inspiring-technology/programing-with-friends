var myArgs = process.argv.slice(2);
// 1. Tomar el valor del balance del mes anterior desde la consola
var lastMonthBalance = parseInt(myArgs[0]);
if (isNaN(lastMonthBalance)) {
    console.log('El valor del balance del mes pasado no es nu numero');
    return;
} else {
    console.log('El valor del balance del mes pasado es valido');
}
// 2. Tomar el valor del balance del mes actual desde la consola
var currentMonthBalance = parseInt(myArgs[1]);
if (isNaN(currentMonthBalance)) {
    console.log('El valor del balance del mes actual no es nu numero');
    return;
}
// 3. Sumar los dos valores y mostra en pantalla
console.log(lastMonthBalance + currentMonthBalance); 



