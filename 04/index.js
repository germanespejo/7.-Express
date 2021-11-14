const express = require("express");
const servidor = express();
servidor.listen(3002);

const saludarEnExpress = require("./app");
//getString = saludarEnExpress;

servidor.get("/", function (request, response){
    response.send(`${saludarEnExpress()}`);
})
