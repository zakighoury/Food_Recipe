const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User model
  text: String,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
