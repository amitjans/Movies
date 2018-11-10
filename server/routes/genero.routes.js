const express = require('express');
const router = express.Router();

const genero = require('../controllers/genero.controller');

router.get('/', genero.getList);
router.get('/:id', genero.details);
router.post('/', genero.create);
router.put('/:id', genero.edit);
router.delete('/:id', genero.delete);

module.exports = router;