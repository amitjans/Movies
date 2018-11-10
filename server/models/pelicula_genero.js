const mongoose = require('mongoose');
const { Schema } = mongoose;
const PeliculaGeneroSchema = new Schema({
    id_pelicula: { type: String, require: true },
    categoría: { type: String, require: true },
});

module.exports = mongoose.model('pelicula_genero', PeliculaGeneroSchema);