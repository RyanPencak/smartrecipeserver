const mongoose = require('mongoose');
// const Recipe = mongoose.model('recipe');
const Recipe = require('../models/recipeModel');


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
exports.create_recipe = function(req, res) {
  let recipe = new Recipe(req.body);
  recipe.save()
    .then(item => {
      res.send(req.body);
    })
    .catch(err => {
      res.status(400).send("Cannot POST");
    });
};

// Get recipe By ID
exports.read_recipe = function(req, res) {
  Recipe.findById(req.params.recipeId, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

// Delete recipe
exports.delete_recipe = function(req, res) {
  Recipe.remove({_id: req.params.recipeId}, function(err, recipe) {
    if (err)
      res.send(err);
    res.json({message: 'Recipe Deleted'});
  });
};
