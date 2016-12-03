// Load required packages
var mongoose = require('mongoose');
var Stat = require('./stat').schema;

var traitSchema = new mongoose.Schema({
    name: String,
    description: String,
    boost: [Stat]
});

var RaceSchema   = new mongoose.Schema({
    name: String,
    description: String,
    traits: [traitSchema]
});

// Export the Mongoose model
module.exports = mongoose.model('Race', RaceSchema);
