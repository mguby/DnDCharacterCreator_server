// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var StatSchema   = new mongoose.Schema({
    name: String,
    modifier: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Stat', StatSchema);
