const genero = require('../models/genero');
const generocontroller = {};

generocontroller.getList = async (req, res) => {
    const generos = await genero.find();
    res.json(generos);
}

generocontroller.details = async (req, res) => {
    const genero = await genero.findById(req.params.id);
    res.json(genero);
}

generocontroller.create = async (req, res) => {
    const newgenero = new genero(req.body);
    await newgenero.save();
    res.json({
        status: 'genero guardado'
    });
}

generocontroller.edit = async (req, res) => {
    const { id } = req.params;
    await genero.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({
        status: 'genero actualizado'
    });
}

generocontroller.delete = async (req, res) => {
    const { id } = req.params;
    const genero = {
        estado: false
    }
    await genero.findByIdAndUpdate(id, { $set: genero });
    res.json({
        status: 'genero eliminado'
    });
}

module.exports = generocontroller;