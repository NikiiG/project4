const Schema = require('mongoose').Schema;

const priceSchema = new Schema({
  small:{ type: Number, required: true },
  medium:{ type: Number, required: true },
  large:{ type: Number, required: true }
  

});
const pizzaSchema = new Schema({
    name:{ type: String, required: true },
    varients:{ type: [String], required: true },
    prices:priceSchema,
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    image: {type: String, required: true },
    description:{type: String, required: true }

},
 {
  timestamps: true
});


module.exports = pizzaSchema;

