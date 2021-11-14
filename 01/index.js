const express = require("express");
const servidor = express();
servidor.listen(3003);

servidor.get("/", function (request, response) {
    response.send('<h1>Hola Mundo</h1><h2>Desde express</h2>');
})