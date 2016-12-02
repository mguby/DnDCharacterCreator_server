var secrets = require('../config/secrets');
var mongoose = require('mongoose');
var helpers = require('../config/helpers');
var Races = require('../models/race');

var baseRoute = '/constants';

module.exports = function(router) {

    var raceRoute = router.route(baseRoute + '/races');
    raceRoute.get(function(req, res) {
        var json = helpers.parseQuery(req.query);
        var db = mongoose.connect(secrets.mongo_connection);
        Races.find(json['where'], json['select'])
            .skip(json['skip'])
            .limit(json['limit'])
            .sort(json['sort'])
            .exec(function(err, result) {
                if(err === null) {
                    err = 'OK';
                }
                if(json['count']) {
                    result = result.length;
                }
                res.json(helpers.createResponse(err, result));
            });
        db.disconnect();
    });

    return router;
};
