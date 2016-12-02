// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var FeatSchema   = new mongoose.Schema({
    name: String
});

// Export the Mongoose model
module.exports = mongoose.model('Feat', FeatSchema);
