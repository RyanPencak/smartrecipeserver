const router = require('express').Router();
const recipes = require('../controllers/recipeController');
const mongoose = require('mongoose');
const Recipe = mongoose.model('recipe');

// GET Request: get all recipes
router.get('/', recipes.list_all_recipes);

// POST Request: post battery
// router.post('/', recipes.create_recipe);

// Get with ID Param: get recipe with given ID
router.get('/:recipeID', recipes.read_recipe);

// DELETE Request: remove specified recipe from the database
router.delete('/:recipeId', recipes.delete_recipe);

module.exports = router;
