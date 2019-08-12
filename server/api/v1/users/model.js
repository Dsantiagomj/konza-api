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
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  lastname: {
    type: String,
    default: '',
    trim: true,
    maxlength: 256,
  },
  email: {
    type: String,
    default: '',
    required: true,
    unique: true,
    trim: true,
    maxlength: 256,
  },
  profilePhoto: {
    type: String,
    default: '',
    required: true,
    trim: true,
  },
};

/*
 * El Schema tambien permite establecer ciertas
 * opciones una de ellas son los timestamps para
 * que se creen los campos createdAt y updatedAt
 * de tipo fecha cada vez que se cree o actualice
 * un registro respectivamente
 */

const user = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('user', user),
  fields,
};
