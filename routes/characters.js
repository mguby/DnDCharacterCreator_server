var getter = require('../util/get_requester');
var helpers = require('../util/helpers');
var Character = require('../models/character');

var baseRoute = '/characters';

module.exports = function(router) {

    var characterRoute = router.route(baseRoute);
    characterRoute.get(function(req, res) {
        getter.get(Character, req, res);
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
