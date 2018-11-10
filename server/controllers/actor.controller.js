const actor = require('../models/actor');
const actorcontroller = {};

actorcontroller.getList = async (req, res) => {
    const actors = await actor.find();
    res.status(200).json(actors);
}

actorcontroller.details = async (req, res) => {
    const actor = await actor.findById(req.params.id);
    res.status(200).json(actor);
}

actorcontroller.create = async (req, res) => {
    const actor = new actor(req.body);
    await actor.save();
    res.status(200).json({
        status: 'actor guardado'
    });
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
    const actor = {
        estado: false
    }
    await actor.findByIdAndUpdate(id, { $set: actor });
    res.status(200).json({
        status: 'actor eliminado'
    });
}

module.exports = actorcontroller;