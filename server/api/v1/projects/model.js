const mongoose = require('mongoose');

const { Schema } = mongoose;

/*
 * El Schema de mongoose nos brinda muchas
 * funcionalidades como establecer una validacion
 * basica para el modelo, asi como funciones de
 * quitar los espacios de sobra en los valores de
 * los campos y demas, inclusive colocar un valor
 * por defecto.
 */

const fields = {
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  description: {
    type: String,
    default: '',
    trim: true,
    maxlength: 256,
  },
};

/*
 * El Schema tambien permite establecer ciertas
 * opciones una de ellas son los timestamps para
 * que se creen los campos createdAt y updatedAt
 * de tipo fecha cada vez que se cree o actualice
 * un registro respectivamente
 */

const project = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('project', project),
  fields,
};
