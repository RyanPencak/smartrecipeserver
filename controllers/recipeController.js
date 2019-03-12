const mongoose = require('mongoose');
const Recipe = mongoose.model('recipe');

// GET Function: get all recipes
exports.list_all_recipes = function(req, res) {
  Recipe.find({}, null, function(err, recipe) {
    if (err) {
      res.send(err);
    }
    res.json(recipe);
  });
};

// POST Function: post recipe to create new recipe
// exports.create_recipe = function(req, res) {
    // To Be Completed
// };

// Get Battery By ID
exports.read_recipe = function(req, res) {
  Recipe.findById(req.params.recipeId, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

// Delete recipe from database
exports.delete_recipe = function(req, res) {
  Battery.remove({_id: req.params.recipeId}, function(err, recipe) {
    if (err)
      res.send(err);
    res.json({message: 'Recipe Deleted'});
  });
};

// import Recipe from '../models/recipeModel';
//
// export const index = (req, res, next) => {
//   Recipe.find().lean().exec((err, recipes) => res.json(
//     { recipes: recipes.map(recipe => ({
//       ...recipe,
//     }))}
//   ));
// };
