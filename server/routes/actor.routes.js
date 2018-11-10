const express = require('express');
const router = express.Router();

const actor = require('../controllers/actor.controller');

router.get('/', actor.getList);
router.get('/:id', actor.details);
router.post('/', actor.create);
router.put('/:id', actor.edit);
router.delete('/:id', actor.delete);

module.exports = router;