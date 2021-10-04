try {
    var myArgs = process.argv.slice(2);
    // 1. Tomar el valor del balance del mes anterior desde la consola
    var lastMonthBalance = parseInt(myArgs[0]);
    EvalParameters(lastMonthBalance);
    // 2. Tomar el valor del balance del mes actual desde la consola
    var currentMonthBalance = parseInt(myArgs[1]);
    EvalParameters(currentMonthBalance);
    // 3. Sumar los dos valores y mostra en pantalla
    var result = SumBalances(lastMonthBalance, currentMonthBalance);
    console.log("La suma final es: " + result); 
} catch (error) {
    console.log("Ups problemon");
}
function EvalParameters(value) {
    if (isNaN(value)) {
        throw Error('El valor no es un numero');
    } else {
        if (value < 10){
            console.warn('El valor es muy chico');
        } 
    }
}

function SumBalances(last, current){
    var sum = last + current;
    var adjustedBalance = sum * 1.35;
    return adjustedBalance;
}


