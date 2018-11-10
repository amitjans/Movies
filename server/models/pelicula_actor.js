const mongoose = require('mongoose');
const { Schema } = mongoose;
const PeliculaActorSchema = new Schema({
    id_pelicula: { type: String, require: true },
    id_actor: { type: String, require: true }
});

module.exports = mongoose.model('pelicula_actor', PeliculaActorSchema);