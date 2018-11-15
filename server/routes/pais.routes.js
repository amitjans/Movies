const express = require('express');
const router = express.Router();

const pais = require('../controllers/pais.controller');

router.get('/', pais.getList);
router.get('/:id', pais.details);
router.post('/', pais.create);
router.put('/:id', pais.edit);
router.delete('/:id', pais.delete);

module.exports = router;