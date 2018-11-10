const mongoose = require('mongoose');
const { Schema } = mongoose;
const GeneroSchema = new Schema({
    descripcion: { type: String, required: true }
})

module.exports = mongoose.model('genero', GeneroSchema);
