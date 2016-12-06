// Load required packages
var mongoose = require('mongoose');
var Class = require('./class').schema;
var Race = require('./race').schema;
var Feat = require('./feat').schema;

var CharacterSchema   = new mongoose.Schema({
    name: String,
    level: { type: Number, default: 0 },
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
    feats: [Feat],
    inventory: [String],
    skills: {
        appraise: { type: Number, default: 0 },
        balance: { type: Number, default: 0 },
        bluff: { type: Number, default: 0 },
        climb: { type: Number, default: 0 },
        concentration: { type: Number, default: 0 },
        craft: { type: Number, default: 0 },
        decipherScript: { type: Number, default: 0 },
        diplomacy: { type: Number, default: 0 },
        disableDevice: { type: Number, default: 0 },
        disguise: { type: Number, default: 0 },
        escapeArtist: { type: Number, default: 0 },
        forgery: { type: Number, default: 0 },
        gatherInformation: { type: Number, default: 0 },
        handleAnimal: { type: Number, default: 0 },
        heal: { type: Number, default: 0 },
        hide: { type: Number, default: 0 },
        intimidate: { type: Number, default: 0 },
        jump: { type: Number, default: 0 },
        knowledgeAll: { type: Number, default: 0 },
        knowledgeArchitecture: { type: Number, default: 0 },
        knowledgeEngineering: { type: Number, default: 0 },
        knowledgeDuoengineering: { type: Number, default: 0 },
        knowledgeGeography: { type: Number, default: 0 },
        knowledgeHistory: { type: Number, default: 0 },
        knowledgeLocal: { type: Number, default: 0 },
        knowledgeNature: { type: Number, default: 0 },
        knowledgeNobility: { type: Number, default: 0 },
        knowledgeRoyalty: { type: Number, default: 0 },
        knowledgeReligion: { type: Number, default: 0 },
        knowledgePlanes: { type: Number, default: 0 },
        listen: { type: Number, default: 0 },
        moveSilently: { type: Number, default: 0 },
        openLock: { type: Number, default: 0 },
        perform: { type: Number, default: 0 },
        profession: { type: Number, default: 0 },
        ride: { type: Number, default: 0 },
        search: { type: Number, default: 0 },
        senseMotive: { type: Number, default: 0 },
        sleightOfHand: { type: Number, default: 0 },
        speakLanguage: { type: Number, default: 0 },
        spellcraft: { type: Number, default: 0 },
        spot: { type: Number, default: 0 },
        survival: { type: Number, default: 0 },
        swim: { type: Number, default: 0 },
        tumble: { type: Number, default: 0 },
        useMagicDevice: { type: Number, default: 0 },
        useRope: { type: Number, default: 0 }
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Character', CharacterSchema);
