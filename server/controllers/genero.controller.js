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
    res.status(201).json({
        status: 'genero guardado'
    });
}

generocontroller.edit = async (req, res) => {
    const { id } = req.params;
    await genero.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({
        status: 'genero actualizado'
    });
}

generocontroller.delete = async (req, res) => {
    const { id } = req.params;
    
    var temp = await genero.findById(id);

    if (temp.peliculas.length > 0) {
        res.status(409).json({
            mensaje: 'No se pudo completar la solicitud. Elimine las peliculas relacionadas.'
        });
    } else {
        await genero.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: 'Genero Eliminado'
        });
    }    
}

module.exports = generocontroller;