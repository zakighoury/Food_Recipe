const mongoose = require('mongoose');

// Define the schema for the recipe data
const recipeSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  authorImage: String,
  ingredients: [String],
  instructions: [String],
  serving: String,
  cookingTime: String,
  prepTime: String,
  cuisine: String,
  nutrition: {
    calories: String,
    fat: String,
    carbohydrates: String,
    protein: String,
    fiber: String,
    sugar: String,
    sodium: String,
    cholesterol: String,
  },
  collection: String,
  type: String,
});

// Create a model from the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

