const express = require('express');
const router = express.Router();

const categoria = require('../controllers/categoria.controller');

router.get('/', categoria.getList);
router.get('/:id', categoria.details);
router.post('/', categoria.create);
router.put('/:id', categoria.edit);
router.delete('/:id', categoria.delete);

module.exports = router;