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
    
    var temp = await pais.findById(id);

    if (temp.peliculas.length > 0) {
        res.status(409).json({
            mensaje: 'No se pudo completar la solicitud. Elimine las peliculas relacionadas.'
        });
    } else {
        await pais.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: 'Pais Eliminado'
        });
    }    
}

module.exports = paiscontroller;