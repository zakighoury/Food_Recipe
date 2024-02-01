// ProductModel.js
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
