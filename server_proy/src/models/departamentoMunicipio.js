const mongoose = require("mongoose");
const { Schema } = mongoose;
const departamentoMunicipioShcema = new Schema({
  departamento: String,
  municipio: String,
});
module.exports = mongoose.model(
  "DepartamentoMunicipio",
  departamentoMunicipioShcema
);
