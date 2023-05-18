const bcrypt = require("bcryptjs");
const departamentoMunicipioModel = require("../models/departamentoMunicipio");
const axios = require("axios");


/* Función que permite agregar todos los departamentos y municipios a mongo*/
const uploadData = async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;
    /* Gestionar informacion en la base de datos*/
    await departamentoMunicipioModel.deleteMany();
    await departamentoMunicipioModel.insertMany(data);
    res.status(201).send("Datos almacenados en mongoDB");
  } catch {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
}

const listData = async (req, res) => {
  try {
    const data = await departamentoMunicipioModel.find();
    const municipios = await data.map()
    res.status(200).send(data);
  } catch (error) {
    console.log("Error al traer los datos", error);
    res.status(500).send("Error al traer los datos");
  }
}

const listmp = async (req, res) => {
  try {
    const departamento = req.query.departamento;
    const data = await departamentoMunicipioModel.find({ departamento: departamento });
    res.status(200).send(data);
  } catch (error) {
    console.log("Error al traer los datos", error);
    res.status(500).send("Error al traer los datos");
  }
}

module.exports = {
  uploadData,
  listData,
  listmp
}