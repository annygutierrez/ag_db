const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    email: String,
    name: String,
    message: String,
});

module.exports = mongoose.model('Post',PostSchema);