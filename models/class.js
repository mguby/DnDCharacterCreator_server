// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var ClassSchema   = new mongoose.Schema({
    name: String
});

// Export the Mongoose model
module.exports = mongoose.model('Class', ClassSchema);
