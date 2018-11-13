const director = require('../models/director');
const directorcontroller = {};

directorcontroller.getList = async (req, res) => {
    const directores = await director.find();
    res.status(200).json(directores);
}

directorcontroller.details = async (req, res) => {
    const director = await director.findById(req.params.id);
    res.status(200).json(director);
}

directorcontroller.create = async (req, res) => {
    const newdirector = new director(req.body);
    await newdirector.save();
    res.status(200).json({
        status: 'director guardado'
    });
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