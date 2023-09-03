const express = require('express');
const router = express.Router();
const pizzasCtrl = require('../../controllers/api/pizzas');

// GET /api/items
router.get('/', pizzasCtrl.index);
// GET /api/items/:id
router.get('/:id', pizzasCtrl.show);

module.exports = router;