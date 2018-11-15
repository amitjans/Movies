const express = require('express');
const router = express.Router();

const nacionalidad = require('../controllers/nacionalidad.controller');

router.get('/', nacionalidad.getList);
router.get('/:id', nacionalidad.details);
router.get('/:id/director', nacionalidad.directores);
router.post('/', nacionalidad.create);
router.put('/:id', nacionalidad.edit);
router.delete('/:id', nacionalidad.delete);

module.exports = router;