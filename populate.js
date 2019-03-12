import mongoose from 'mongoose';
import Recipe from './models/recipeModel';

const recipes = [
  {
    title: 'Seared Steak',
    author: 'Mark Bittman',
    time: '55 Minutes',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Beef_fillet_steak_with_mushrooms.jpg',
    ingredients: ["2 Rib-eye Steak", "Course Salt", "Black Pepper"],
    steps: [
      "Let steaks rest for 30 minutes.",
      "Heat oven to 500 degrees.",
      "Turn stove burner on high.",
      "Place cast-iron skillet over high heat and heat until smoking.",
      "Sprinkle surface of skillet with salt.",
      "Get your oven mitts ready.",
      "Place steaks in skillet and immediately transfer to the oven.",
      "Leave the steaks in the oven for 4 minutes before flipping them.",
      "Flip the steaks and leave them in for another four minutes.",
      "Remove the skillet from the oven and let rest for 3 to 5 minutes.",
      "Time to slice the steaks and enjoy."]
  },
  {
    title: 'Chicken Parm',
    time: '40 Minutes',
    pic: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Chicken_dish.jpg',
    ingredients: [],
    steps: []
  }
];

// Set Database URL
const dburl = "mongodb://rpencak:nbBAKu33fYHnTApw@smartrecipes-shard-00-00-nigdu.mongodb.net:27017,smartrecipes-shard-00-01-nigdu.mongodb.net:27017,smartrecipes-shard-00-02-nigdu.mongodb.net:27017/test?ssl=true&replicaSet=SmartRecipes-shard-0&authSource=admin&retryWrites=true";

// Connect to MongoDB with Mongoose
mongoose.connect(dburl, function (err, db) {
  if (err) {
    console.log('Unable to connect to mongoDB', err);
  }
  else {
    console.log('Connection established to ', dburl);
  }
});

// Place all recipes in database
recipes.map(data => {
  const recipe = new Recipe(data);
  recipe.save();
});
