const express = require('express');
const router = express.Router();

const pelicula = require('../controllers/pelicula.controller');

router.get('/', pelicula.getList);
router.get('/:id', pelicula.details);
router.put('/:id', pelicula.edit);
router.delete('/:id', pelicula.delete);

module.exports = router;