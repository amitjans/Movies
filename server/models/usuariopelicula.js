const mongoose = require('mongoose');
const { Schema } = mongoose;
const UsuarioPeliculaSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'usuario' },
    pelicula: { type: Schema.Types.ObjectId, ref: 'pelicula' },
    valor: { type: Number, required: true }
})

module.exports = mongoose.model('usuariopelicula', UsuarioPeliculaSchema);