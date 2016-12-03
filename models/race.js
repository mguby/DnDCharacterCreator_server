// Load required packages
var mongoose = require('mongoose');

var statSchema = new mongoose.Schema({
    name: String,
    modifier: Number
});

var traitSchema = new mongoose.Schema({
    name: String,
    description: String,
    boost: [statSchema]
});

var RaceSchema   = new mongoose.Schema({
    name: String,
    description: String,
    traits: [traitSchema]
});

// Export the Mongoose model
module.exports = mongoose.model('Race', RaceSchema);
