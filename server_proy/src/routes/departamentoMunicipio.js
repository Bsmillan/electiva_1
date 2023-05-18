const express = require("express");
const departamentoMunicipioController = require("../controllers/departamentoMunicipio");
const api = express.Router();

api.post('/datosabiertos', departamentoMunicipioController.uploadData);
api.get('/listdeptoMpio', departamentoMunicipioController.listData);
api.get('/listmp', departamentoMunicipioController.listmp);

module.exports = api;
