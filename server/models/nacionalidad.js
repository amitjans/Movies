const mongoose = require('mongoose');
const { Schema } = mongoose;
const NacionalidadSchema = new Schema({
    descripcion: { type: String, required: true },
    actores: [{ type: Schema.Types.ObjectId, ref: 'actor' }],
    directores: [{ type: Schema.Types.ObjectId, ref: 'director' }]
})

module.exports = mongoose.model('nacionalidad', NacionalidadSchema);