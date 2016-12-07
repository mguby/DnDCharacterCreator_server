// Load required packages
var mongoose = require('mongoose');
var Class = require('./class').schema;
var Race = require('./race').schema;
var Feat = require('./feat').schema;

var CharacterSchema   = new mongoose.Schema({
    name: String,
    user: String,
    level: { type: Number, default: 1 },
    pictureURL: String,
    class: Class,
    race: Race,
    abilities: {
        str: { type: Number, default: 0 },
        dex: { type: Number, default: 0 },
        con: { type: Number, default: 0 },
        int: { type: Number, default: 0 },
        wis: { type: Number, default: 0 },
        cha: { type: Number, default: 0 }
    },
    feats: {type: [Feat], default: []},
    inventory: {type: [String], default: []}
});

// Export the Mongoose model
module.exports = mongoose.model('Character', CharacterSchema);
