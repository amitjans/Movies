const pelicula = require('../models/pelicula');
const categoria = require('../models/categoria');
const genero = require('../models/genero');
const pais = require('../models/pais');
const director = require('../models/director');
const actor = require('../models/actor');
const usuariopelicula = require('../models/usuariopelicula');
const jwt = require('jsonwebtoken');
const peliculacontroller = {};

peliculacontroller.getList = async (req, res) => {
    const peliculas = await pelicula.find();
    res.json(peliculas);
}

peliculacontroller.details = async (req, res) => {
    const obj = await pelicula.findById(req.params.id).populate('actor genero categoria director pais');
    res.json(obj);
}

peliculacontroller.create = async (req, res) => {
    console.log(req);
    const objpelicula = new pelicula(req.body);
    await objpelicula.save().then(async function (result) {
        //generos
        for (let i = 0; i < objpelicula.genero.length; i++) {
            const g = await genero.findById(objpelicula.genero[i]);
            g.peliculas.push(objpelicula);
            await g.save();
        }
        //autores
        for (let i = 0; i < objpelicula.actor.length; i++) {
            const a = await actor.findById(objpelicula.actor[i]);
            a.peliculas.push(objpelicula);
            await a.save();
        }
        //categorias
        const c = await categoria.findById(objpelicula.categoria);
        c.peliculas.push(objpelicula);
        await c.save();
        //director
        const d = await director.findById(objpelicula.director);
        d.peliculas.push(objpelicula);
        await d.save();
        //pais
        const p = await pais.findById(objpelicula.pais);
        p.peliculas.push(objpelicula);
        await p.save();
        res.status(201).json(objpelicula);
    }).catch((err) => {
        res.status(500).json({
            error: err
        });
    });
}
peliculacontroller.vote = async (req, res) => {
    jwt.verify(req.token, 'secret_key', async (err, data) => {
        if (err) {
            res.status(403).json({
                error: err
            });
        } else {
            await usuariopelicula.findOneAndUpdate({ usuario: data.usuario._id, pelicula: req.params.id }, { $set: { valor: req.body.valor } }, { upsert: true, new: true }).then((result) => {
            }).catch((err) => {
                res.status(500).json({
                    status: 'Error interno',
                    error: err
                });
            });
            var p = await pelicula.findById(req.params.id).populate('usuariopelicula');
            p.usuariopelicula.push(up);
            await p.save();

            var list = p.usuariopelicula;
            console.log(list.length);
            console.log(list);
            var count = 0;
            for (let i = 0; i < list.length; i++) {
                console.log('valor: ' + list[i].valor);
                count += list[i].valor;
            }
            console.log(count);
            var score = Math.round(count / list.length);
            console.log(score);
            await pelicula.findByIdAndUpdate(req.params.id, { $set: { score:  score } }, { new: true });
            res.status(200).json(up);
        }
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