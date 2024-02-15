const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
