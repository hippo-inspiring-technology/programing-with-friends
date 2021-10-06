/*
- For all the spaces you must print Stay in space {{space you fell in}}
- For multiples of six print Move two spaces forward
- For space 6 add the rule The Bridge: Go to space 12.

- the space 19: The Hotel: Stay for (miss) one turn, 
- for the space 31 The Well: Wait until someone comes to pull you out - they then take your place , 
- and The Maze: Go back to space 39 for the space 42.
- Add the prison rule for the spaces 50 to 55 and print The Prison: Wait until someone comes to release you - they then take your place

*/


for(var counter = 1; counter <= 63; counter++){
    var esMultiploDeSeis = counter % 6 === 0;
    if (counter === 6){
        console.log("The Bridge: Go to space 12");
    } else if (counter === 19) {
        console.log("The Hotel: Stay for (miss) one turn");
    } else if (counter === 31) {
        console.log("The Well: Wait until someone comes to pull you out - they then take your place ");
    } else if (counter === 42) {
        console.log("The Maze: Go back to space 39");
    } else if (counter >= 50 && counter <= 55) {
        console.log("The Prison: Wait until someone comes to release you - they then take your place")
    } else if (esMultiploDeSeis) {
        console.log("Move two spaces forward");
    } else {
        console.log("Stay in space " + counter);
    }
}









/* 

while(finish == false){
    console.log("Stay in space " + counter);
    counter++;
    if (counter > 63) {
        finish = true;
    }
}

*/
