const mongoose = require('mongoose');

const productCommentSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
});
const ProductComment = mongoose.model('ProductComment', productCommentSchema);

module.exports = ProductComment