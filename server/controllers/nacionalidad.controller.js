const nacionalidad = require('../models/nacionalidad');
const nacionalidadcontroller = {};

nacionalidadcontroller.getList = async (req, res) => {
    const nacionalidads = await nacionalidad.find().populate('directores').populate('actores');
    res.status(200).json(nacionalidads);
}

nacionalidadcontroller.details = async (req, res) => res.status(200).json(await nacionalidad.findById(req.params.id).populate('directores').populate('actores'));

nacionalidadcontroller.create = async (req, res) => {
    var nac = new nacionalidad(req.body);
    await nac.save();
    res.status(201).json(nac);
}

nacionalidadcontroller.directores = async (req, res) => {
    res.status(200).json(await nacionalidad.findById(req.params.id).directores);
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
    var temp = await nacionalidad.findById(id);

    if (temp.actores.length > 0 || temp.directores.length > 0) {
        res.status(409).json({
            mensaje: 'No se pudo completar la solicitud. Elimine las peliculas relacionadas.'
        });
    } else {
        await nacionalidad.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: 'Nacionalidad Eliminada'
        });
    } 
}

module.exports = nacionalidadcontroller;