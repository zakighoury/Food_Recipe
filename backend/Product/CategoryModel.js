const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

  imageUrl: String,
  title: String,
  
});

const Category = mongoose.model("Cat", CategorySchema);

module.exports = Category;
