'use strict';

//Declarar as dependencias do arquivo
const express = require('express');
const app = express();




//Definir a porta que o servidor vai escutar
const port = 1234;

//Configurar o servidor para escutar a porta definida
app.listen(port, () => {
    console.log(`Servidor rodadndo na porta ${port}`)
});