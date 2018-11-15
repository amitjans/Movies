const mongoose = require('mongoose');
const { Schema } = mongoose;
const PeliculaSchema = new Schema({
    titulo: { type: String, require: true },
    ano: { type: Number, require: true },
    duracion: { type: Number, require: true },
    pais: { type: Schema.Types.ObjectId, ref: 'pais', require: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'categoria', require: true },
    genero: [{ type: Schema.Types.ObjectId, ref: 'genero' }],
    director: { type: Schema.Types.ObjectId, ref: 'director', require: true },
    actor: [{ type: Schema.Types.ObjectId, ref: 'actor' }],
    usuariopelicula: [{ type: Schema.Types.ObjectId, ref: 'usuariopelicula' }],
    score: { type: Number, default: 0 }
});

module.exports = mongoose.model('pelicula', PeliculaSchema);