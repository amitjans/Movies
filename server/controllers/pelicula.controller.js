const pelicula = require('../models/pelicula');
const peliculacontroller = {};

peliculacontroller.getList = async (req, res) => {
    const peliculas = await pelicula.find();
    res.json(peliculas);
}

peliculacontroller.details = async (req, res) => {
    const pelicula = await pelicula.findById(req.params.id);
    res.json(pelicula);
}

peliculacontroller.create = async (req, res) => {
    const pelicula = new pelicula(req.body);
    await pelicula.save();
    res.json({
        status: 'pelicula guardada'
    });
}

peliculacontroller.edit = async (req, res) => {
    const { id } = req.params;
    await pelicula.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({
        status: 'pelicula actualizada'
    });
}

peliculacontroller.delete = async (req, res) => {
    const { id } = req.params;
    const pelicula = {
        estado: false
    }
    await pelicula.findByIdAndUpdate(id, { $set: pelicula });
    res.json({
        status: 'pelicula eliminada'
    });
}

module.exports = peliculacontroller;