const mongoose = require('mongoose');
const { Schema } = mongoose;
const UsuarioSchema = new Schema({
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    usuariopelicula: [{ type: Schema.Types.ObjectId, ref: 'usuariopelicula' }]
});

module.exports = mongoose.model('usuario', UsuarioSchema);