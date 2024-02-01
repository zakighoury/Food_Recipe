const mongoose = require('mongoose');

const ExploreSchema = new mongoose.Schema({
    title: String,
    button: String,
    imageUrl: String,
    rating: Number,
    author: String,
    MiniUrl: String,
});

const Explore = mongoose.model('Explore', ExploreSchema); 

module.exports = Explore;
