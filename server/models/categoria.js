const mongoose = require('mongoose');
const { Schema } = mongoose;
const CategoriaSchema = new Schema({
    descripcion: { type: String, required: true },
    peliculas: [{ type: Schema.Types.ObjectId, ref: 'pelicula' }]
})

module.exports = mongoose.model('categoria', CategoriaSchema);
