const express = require("express");
const departamentoMunicipioController = require("../controllers/departamentoMunicipio");
const api = express.Router();
const departamentoMunicipio = require('../models/departamentoMunicipio');

api.post('/datosabiertos', departamentoMunicipioController.uploadData);
api.get('/listdpmp', departamentoMunicipioController.listdpmp);

module.exports = api;
