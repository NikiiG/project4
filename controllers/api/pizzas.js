const Pizza = require('../../models/pizza');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const pizzas = await Pizza.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
 
  res.json(pizzas);
}

async function show(req, res) {
  const pizza = await Pizza.findById(req.params.id);
  res.json(pizza);
}
