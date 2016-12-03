// Load required packages
var mongoose = require('mongoose');
var Stat = require('./stat').schema;

// Define our beer schema
var FeatSchema   = new mongoose.Schema({
    name: String,
    description: String,
    bonus: [Stat]
});

// Export the Mongoose model
module.exports = mongoose.model('Feat', FeatSchema);
