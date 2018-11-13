const mongoose = require('mongoose');
const { Schema } = mongoose;
const PeliculaSchema = new Schema({
    titulo: { type: String, require: true },
    id_categoría: { type: Schema.Types.ObjectId, ref: 'categoria', require: true },
    actor: [{ type: Schema.Types.ObjectId, ref: 'actor' }],
    género: [{ type: Schema.Types.ObjectId, ref: 'genero' }],
    ano: { type: String, require: true },
    pais: { type: String, require: true },
    duracion: { type: String, require: true },
    score: { type: String, require: true },
    Director: { type: Schema.Types.ObjectId, ref: 'director', require: true },
});

module.exports = mongoose.model('pelicula', PeliculaSchema);