const express = require('express');
const router = express.Router();
const jwtoken = require('../common/token');

const pelicula = require('../controllers/pelicula.controller');

router.get('/', pelicula.getList);
router.post('/', pelicula.create);
router.get('/:id', pelicula.details);
router.post('/:id/votacion', jwtoken.ensureToken, pelicula.vote);
router.put('/:id', pelicula.edit);
router.delete('/:id', pelicula.delete);

module.exports = router;