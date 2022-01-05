// Reto -> Hacer un Juego de Pieda, Papel o Tijera

var juego = [
    "Piedra",
    "Papel",
    "Tijera"
]

function paRoSciIf (jugador) {
    var i = Math.floor(Math.random()*(2-0+1));
    if (juego[i]==="Piedra" && jugador === "Papel"){
        console.log("Jugador: " + jugador);
        console.log("Máquina: " + juego[i]);
        console.log ("Haz ganado");
    } 
    else if (juego[i]==="Tijera" && jugador === "Piedra") {
        console.log("Jugador: " + jugador);
        console.log("Máquina: " + juego[i]);
        console.log ("Haz ganado");
    }
    else if (juego[i]==="Papel" && jugador === "Tijera") {
        console.log("Jugador: " + jugador);
        console.log("Máquina: " + juego[i]);
        console.log ("Haz ganado");
    }
    else if (juego[i]=== jugador) {
        console.log("Jugador: " + jugador);
        console.log("Máquina: " + juego[i]);
        console.log ("Haz Empatado");
    }
    else{
        console.log("Jugador: " + jugador);
        console.log("Máquina: " + juego[i]);
        console.log ("Haz perdido");
    } 
}

//Generar el mismo juego pero usando Switch

function paRoSciSwitch (jugador) {
    var i = Math.floor(Math.random()*(2-0+1))
    switch (true){
        case (jugador===juego[i]):
            console.log("Jugador: " + jugador);
            console.log("Máquina: " + juego[i]);
            console.log ("Haz Empatado");
        break;

        case (juego[i]==="Piedra" && jugador === "Papel"):
        case (juego[i]==="Tijera" && jugador === "Piedra"):
        case (juego[i]==="Papel" && jugador === "Tijera"):
            console.log("Jugador: " + jugador);
            console.log("Máquina: " + juego[i]);
            console.log ("Haz ganado");
        break;

        default:
            console.log("Jugador: " + jugador);
            console.log("Máquina: " + juego[i]);
            console.log ("Haz perdido");

    }
}