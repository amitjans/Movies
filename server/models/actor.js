const mongoose = require('mongoose');
const { Schema } = mongoose;
const ActorSchema = new Schema({
    nombre: { type: String, required: true },
    id_nacionalidad: { type: String, required: true }
});

module.exports = mongoose.model('actor', ActorSchema);