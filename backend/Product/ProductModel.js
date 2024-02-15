const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    button: String,
    imageUrl: String,
    rating: Number,
    author:String,
    MiniUrl:String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
