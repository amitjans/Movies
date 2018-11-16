const actor = require('../models/actor');
const nacionalidad = require('../models/nacionalidad');
const actorcontroller = {};

actorcontroller.getList = async (req, res) => {
    const actors = await actor.find().populate('nacionalidad');
    res.status(200).json(actors);
}

actorcontroller.details = async (req, res) => res.status(200).json(await actor.findById(req.params.id).populate('nacionalidad'));

actorcontroller.create = async (req, res) => {
    const nac = await nacionalidad.findById(req.body.nacionalidad);
    const newactor = new actor(req.body);
    await newactor.save();
    nac.actores.push(newactor);
    await nac.save();
    res.status(201).json(newactor);
}

actorcontroller.edit = async (req, res) => {
    const { id } = req.params;
    await actor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({
        status: 'actor actualizado'
    });
}

actorcontroller.delete = async (req, res) => {
    const { id } = req.params;
    
    var temp = await actor.findById(id);

    if (temp.peliculas.length > 0) {
        res.status(409).json({
            mensaje: 'No se pudo completar la solicitud. Elimine las peliculas relacionadas.'
        });
    } else {
        await actor.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: 'Actor Eliminado'
        });
    }  
}

module.exports = actorcontroller;