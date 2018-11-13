const mongoose = require('mongoose');
const { Schema } = mongoose;
const DirectorSchema = new Schema({
    nombre: { type: String, required: true },
    nacionalidad: { type: Schema.Types.ObjectId, ref: 'nacionalidad' },
    peliculas: [{ type: Schema.Types.ObjectId, ref: 'pelicula' }]
});

module.exports = mongoose.model('director', DirectorSchema);