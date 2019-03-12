var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  time: String,
  pic: String,
  ingredients: Array,
  steps: Array
});

module.exports = mongoose.model('recipe', recipeSchema);
