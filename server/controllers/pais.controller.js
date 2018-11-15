const pais = require('../models/pais');
const paiscontroller = {};

paiscontroller.getList = async (req, res) => {
    const paiss = await pais.find();
    res.json(paiss);
}

paiscontroller.details = async (req, res) => res.json(await pais.findById(req.params.id).populate('peliculas'));

paiscontroller.create = async (req, res) => {
    const newpais = new pais(req.body);
    await newpais.save();
    res.status(201).json(newpais);
}

paiscontroller.edit = async (req, res) => {
    const { id } = req.params;
    await pais.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({
        status: 'pais actualizado'
    });
}

paiscontroller.delete = async (req, res) => {
    const { id } = req.params;
    const pais = {
        estado: false
    }
    await pais.findByIdAndUpdate(id, { $set: pais });
    res.json({
        status: 'pais eliminado'
    });
}

module.exports = paiscontroller;