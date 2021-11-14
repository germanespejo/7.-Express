const express = require("express");
const servidor = express();
servidor.listen(3002);

let object5 = [
    {
        nombre: "Fulano",
        apellidos: "Díaz Etxebarria",
        edad: "18"
    },
    {
        nombre: "Mengano",
        apellidos: "Martínez Adúriz",
        edad: "27"
    },
    {
        nombre: "Pancracio",
        apellidos: "O'Crowley O'Donell",
        edad: "42"
    },
]

servidor.get("/:nombre", function (request, response) {
    let nombres = request.params.nombre;
    response.send(`${object5.nombres}`);
})

servidor.get("/:apellidos", function (request, response) {
    let apellidos = request.params.apellidos;
    response.send(`${apellidos}`);
})

servidor.get("/:edad", function (request, response) {
    let edad = request.params.edad;
    response.send(`${edad}`);
})