// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var RaceSchema   = new mongoose.Schema({
    name: String
});

// Export the Mongoose model
module.exports = mongoose.model('Race', RaceSchema);
