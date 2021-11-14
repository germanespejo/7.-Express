const express = require("express");
const servidor = express();
servidor.listen(3003);

servidor.get("/persona", function (request, response){
    response.send(["Germán", "Erlantz", "Roque", "Eneko", "Jaione"]);
})

servidor.get("/persona/:parametro", function (request, response){
    let parametro = request.params.parametro;
    response.send(parametro);
})

