const mongoose = require('mongoose');
const { Schema } = mongoose;
const PeliculaSchema = new Schema({
    titulo: { type: String, require: true },
    id_categoría: { type: String, require: true },
    género: { type: String, require: true },
    ano: { type: String, require: true },
    pais: { type: String, require: true },
    duracion: { type: String, require: true },
    score: { type: String, require: true },
    Director: { type: String, require: true }
});

module.exports = mongoose.model('pelicula', PeliculaSchema);