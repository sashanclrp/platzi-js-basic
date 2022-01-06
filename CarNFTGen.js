// Crear una función que te genere todas las posibles combinaciones
// De carros según 3 parámetros

var brand = [
    "Tesla",
    "Ferrari",
    "Lamborgini",
    "Aston Martin"
]

var color = [
    "Rojo",
    "Azul",
    "Negro",
    "Blanco"
]

var model = [
    2022,
    2021,
    2020,
    2019
]

function luxCar (br, co, mo) {
    this.brand = br;
    this.color = co;
    this.model = mo;
}

var i = 0
var carId = 0
var nftCars = []

while (i < brand.length){
    var x = 0
    while (x < color.length){
        var y = 0
        while (y < model.length){
            window["luxuryCarId_"+carId] = new luxCar(brand[i],color[x],model[y])
            console.log(window["luxuryCarId_"+carId])
            nftCars.push(window["luxuryCarId_"+carId])

            y++
            carId++
        }

        x++
    }

    i++
}