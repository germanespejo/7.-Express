const express = require("express");
const servidor = express();
servidor.listen(3003);

function num() {
    return Math.floor(Math.random() * 10000001);
}

servidor.get("/02", function (request, response) {
    response.send(`<h1>${num()}</h1>`);
})