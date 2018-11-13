const nacionalidad = require('../models/nacionalidad');
const director = require('../models/director');
const nacionalidadcontroller = {};

nacionalidadcontroller.getList = async (req, res) => {
    const nacionalidads = await nacionalidad.find();
    res.status(200).json(nacionalidads);
}

nacionalidadcontroller.details = async (req, res) => {
    const nacionalidad = await nacionalidad.findById(req.params.id);
    res.status(200).json(nacionalidad);
}

nacionalidadcontroller.create = async (req, res) => {
    await new nacionalidad(req.body).save();
    res.status(201).json({
        status: 'nacionalidad guardada'
    });
}

nacionalidadcontroller.createdirector = async (req, res) => {
    const nacionalidad = await nacionalidad.findById(req.params.id);
    await new director(req.body).save();
    nacionalidad.directores
    res.status(201).json({
        status: 'nacionalidad guardada'
    });
}

nacionalidadcontroller.edit = async (req, res) => {
    const { id } = req.params;
    await nacionalidad.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({
        status: 'nacionalidad actualizada'
    });
}

nacionalidadcontroller.delete = async (req, res) => {
    const { id } = req.params;
    const newnacionalidad = {
        estado: false
    }
    await nacionalidad.findByIdAndUpdate(id, { $set: nacionalidad });
    res.status(200).json({
        status: 'nacionalidad eliminada'
    });
}

module.exports = nacionalidadcontroller;