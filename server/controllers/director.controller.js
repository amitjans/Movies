const director = require('../models/director');
const nacionalidad = require('../models/nacionalidad');
const directorcontroller = {};

directorcontroller.getList = async (req, res) => {
    const directores = await director.find();
    res.status(200).json(directores);
}

directorcontroller.details = async (req, res) => res.status(200).json(await director.findById(req.params.id).populate('nacionalidad'));

directorcontroller.create = async (req, res) => {
    const nac = await nacionalidad.findById(req.body.nacionalidad);
    const newdirector = new director(req.body);

    newdirector.nacionalidad = nac;
    await newdirector.save();
    nac.directores.push(newdirector);
    await nac.save();
    res.status(201).json(newdirector.populate('nacionalidad'));
}

directorcontroller.edit = async (req, res) => {
    const { id } = req.params;
    await director.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({
        status: 'director actualizado'
    });
}

directorcontroller.delete = async (req, res) => {
    const { id } = req.params;
    const director = {
        estado: false
    }
    await director.findByIdAndUpdate(id, { $set: director });
    res.status(200).json({
        status: 'director eliminado'
    });
}

module.exports = directorcontroller;