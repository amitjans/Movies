const express = require('express');
const router = express.Router();

const recorridobici = require('../controllers/director.controller');

router.get('/', recorridobici.getList);
router.get('/:id', recorridobici.details);
router.post('/', recorridobici.create);
router.put('/:id', recorridobici.edit);
router.delete('/:id', recorridobici.delete);

module.exports = router;