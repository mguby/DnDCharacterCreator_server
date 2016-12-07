var getter = require('../util/get_requester');
var helpers = require('../util/helpers');
var Character = require('../models/character');

var baseRoute = '/characters';

module.exports = function(router) {

    var characterRoute = router.route(baseRoute);
    characterRoute.get(function(req, res) {
        getter.get(Character, req, res);
    });

    characterRoute.post(function(req, res) {
        console.log(req.body.abilities);
        //req.body.abilities = eval("(" + req.body.abilities + ")");
        //req.body.class = eval("(" + req.body.class + ")");
        //req.body.race = eval("(" + req.body.race + ")");
        //req.body.skills = eval("(" + req.body.skills + ")");
        //req.body.feats = eval("(" + req.body.feats + ")");

        var character = new Character({
            name: req.body.name,
            user: req.body.user,
            level: req.body.level,
            pictureURL: req.body.pictureURL,
            class: req.body.class,
            race: req.body.race,
            abilities: {
                str: req.body.abilities.str,
                dex: req.body.abilities.dex,
                con: req.body.abilities.con,
                int: req.body.abilities.int,
                wis: req.body.abilities.wis,
                cha: req.body.abilities.cha
            },
            feats: req.body.feats,
            inventory: req.body.inventory,
            skills: {
                appraise: req.body.skills.appraise,
                balance: req.body.skills.balance,
                bluff: req.body.skills.bluff,
                climb: req.body.skills.climb,
                concentration: req.body.skills.concentration,
                craft: req.body.skills.craft,
                decipherScript: req.body.skills.decipherScript,
                diplomacy: req.body.skills.diplomacy,
                disableDevice: req.body.skills.disableDevice,
                disguise: req.body.skills.disguise,
                escapeArtist: req.body.skills.escapeArtist,
                forgery: req.body.skills.forgery,
                gatherInformation: req.body.skills.gatherInformation,
                handleAnimal: req.body.skills.handleAnimal,
                heal: req.body.skills.heal,
                hide: req.body.skills.hide,
                intimidate: req.body.skills.intimidate,
                jump: req.body.skills.jump,
                knowledgeAll: req.body.skills.knowledgeAll,
                knowledgeArchitecture: req.body.skills.knowledgeArchitecture,
                knowledgeEngineering: req.body.skills.knowledgeEngineering,
                knowledgeDuoengineering: req.body.skills.knowledgeDuoengineering,
                knowledgeGeography: req.body.skills.knowledgeGeography,
                knowledgeHistory: req.body.skills.knowledgeHistory,
                knowledgeLocal: req.body.skills.knowledgeLocal,
                knowledgeNature: req.body.skills.knowledgeNature,
                knowledgeNobility: req.body.skills.knowledgeNobility,
                knowledgeRoyalty: req.body.skills.knowledgeRoyalty,
                knowledgeReligion: req.body.skills.knowledgeReligion,
                knowledgePlanes: req.body.skills.knowledgePlanes,
                listen: req.body.skills.listen,
                moveSilently: req.body.skills.moveSilently,
                openLock: req.body.skills.openLock,
                perform: req.body.skills.perform,
                profession: req.body.skills.profession,
                ride: req.body.skills.ride,
                search: req.body.skills.search,
                senseMotive: req.body.skills.senseMotive,
                sleightOfHand: req.body.skills.sleightOfHand,
                speakLanguage: req.body.skills.speakLanguage,
                spellcraft: req.body.skills.spellcraft,
                spot: req.body.skills.spot,
                survival: req.body.skills.survival,
                swim: req.body.skills.swim,
                tumble: req.body.skills.tumble,
                useMagicDevice: req.body.skills.useMagicDevice,
                useRope: req.body.skills.useRope
            }
        });
        console.log(JSON.stringify(character));
        character.save().then(function(character) {
            res.status(201).json(helpers.createResponse("OK", character));
        })
        .catch(function(err) {
           res.status(500).json(helpers.createResponse(err.message, []));
        });
    });

    var characterIdRoute = router.route(baseRoute + '/:id');

    characterIdRoute.get(function(req, res) {
        var charId = helpers.getCharId(req);
        Character.findById(charId).exec().then(function(result) {
            if(result === null) {
                return Promise.reject(new Error("Character not found"));
            }
            res.json(helpers.createResponse("OK", result));
        })
        .catch(function(err) {
            res.status(404).json(helpers.createResponse(err.message, []));
        })
    });

    characterIdRoute.put(function(req, res) {
        var charId = helpers.getCharId(req);
        var query = { _id: charId };
        Character.findById(charId).exec().then(function(result) {
            if(result === null) {
                return Promise.reject(new Error("character not found"));
            }
            return Character.findOneAndUpdate(query, req.body, {upsert: true, new: true}).exec();
        })
        .then(function(doc) {
            res.status(200).json(helpers.createResponse("OK", doc));
        })
        .catch(function(err) {
           res.status(404).json(helpers.createResponse(err.message, [])) ;
        });
    });


    return router;

};
