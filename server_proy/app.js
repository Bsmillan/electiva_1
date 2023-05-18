const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { API_VERSION } = require('./constants');
const app = express();

/*cargar rutas*/
const authRoutes = require('./src/routes/auth');
const deptoMpioRoutes = require('./src/routes/departamentoMunicipio');
/*const userRoutes = require('./src/routes/user');*/

/*Trabajar con la extension client-rest */
app.use(bodyParser.json());
/*Pruebas de request utilizando postman */
app.use(bodyParser.urlencoded({ extended: true }));

/* Evitar bloqueos en el navegador cuando estemos trabajando con el backend y el frontend a la vez */
app.use(cors());
console.log(`api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}/auth`, authRoutes);
/*app.use(`/api/${API_VERSION}`, userRoutes);*/
app.use(`/api/${API_VERSION}/departamentoMunicipio`, deptoMpioRoutes);

module.exports = app;