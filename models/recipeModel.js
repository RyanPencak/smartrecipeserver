var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  author: String,
  time: String,
  yield: String,
  photocreds: String,
  titleImg: String,
  ingredients: [[String]],
  steps: [[{
    instruction: String,
    img: String,
    time: String
  }]],
});

module.exports = mongoose.model('recipe', recipeSchema);
