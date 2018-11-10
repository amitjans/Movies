const mongoose = require('mongoose');
const { Schema } = mongoose;
const DirectorSchema = new Schema({
    nombre: { type: String, required: true },
    id_nacionalidad: { type: String, required: true }
});

module.exports = mongoose.model('director', DirectorSchema);