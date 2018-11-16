const categoria = require('../models/categoria');
const categoriacontroller = {};

categoriacontroller.getList = async (req, res) => {
    const categorias = await categoria.find();
    res.status(200).json(categorias);
}

categoriacontroller.details = async (req, res) => {
    const categoria = await categoria.findById(req.params.id);
    res.status(200).json(categoria);
}

categoriacontroller.create = async (req, res) => {
    const newcategoria = new categoria(req.body);
    await newcategoria.save();
    res.status(201).json({
        status: 'categoria guardada'
    });
}

categoriacontroller.edit = async (req, res) => {
    const { id } = req.params;
    await categoria.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({
        status: 'categoria actualizada'
    });
}

categoriacontroller.delete = async (req, res) => {
    const { id } = req.params;
    
    var temp = await categoria.findById(id);

    if (temp.peliculas.length > 0) {
        res.status(409).json({
            mensaje: 'No se pudo completar la solicitud. Elimine las peliculas relacionadas.'
        });
    } else {
        await categoria.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: 'Categoria Eliminada'
        });
    }  
}

module.exports = categoriacontroller;