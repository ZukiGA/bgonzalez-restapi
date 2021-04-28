// incluimos cors
const cors = require('cors');
//incluimos una instancia de express server
const express = require('express');
//incluimos archivo de rutas
const routes = require('../routes');
//definimos la instancia del server
const server = express();

// usamos cors en nuestro server
server.use(cors());
server.options('*', cors());

server.use(express.json());

server.use('/api', routes);

// se exporta objeto server para poder ser usado
module.exports = server;