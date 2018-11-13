const express = require('express');
const router = express.Router();

const nacionalidad = require('../controllers/nacionalidad.controller');

router.get('/', nacionalidad.getList);
router.get('/:id', nacionalidad.details);
router.post('/', nacionalidad.create);
router.post('/:id/director', nacionalidad.createdirector);
router.put('/:id', nacionalidad.edit);
router.delete('/:id', nacionalidad.delete);

module.exports = router;