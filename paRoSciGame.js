// Reto -> Hacer un Juego de Pieda, Papel o Tijera

var juego = [
    "Piedra",
    "Papel",
    "Tijera"
]

function paRoSci (jugador) {
    var i = Math.floor(Math.random()*(2-0+1))
    if (juego[i]==="Piedra" && jugador === "Papel"){
        console.log("Jugador: " + jugador)
        console.log("Máquina: " + juego[i])
        console.log ("Haz ganado")
    } 
    else if (juego[i]==="Tijera" && jugador === "Piedra") {
        console.log("Jugador: " + jugador)
        console.log("Máquina: " + juego[i])
        console.log ("Haz ganado")
    }
    else if (juego[i]==="Papel" && jugador === "Tijera") {
        console.log("Jugador: " + jugador)
        console.log("Máquina: " + juego[i])
        console.log ("Haz ganado")
    }
    else if (juego[i]=== jugador) {
        console.log("Jugador: " + jugador)
        console.log("Máquina: " + juego[i])
        console.log ("Haz Empatado")
    }
    else{
        console.log("Jugador: " + jugador)
        console.log("Máquina: " + juego[i])
        console.log ("Haz perdido")
    } 
}