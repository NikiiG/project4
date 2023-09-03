const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const pizzaSchema = require('./pizzaSchema');

module.exports = mongoose.model('Pizza', pizzaSchema);