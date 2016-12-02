var secrets = require('../config/secrets');
var mongoose = require('mongoose');
var Races = require('../models/race');

var baseRoute = '/constants';

module.exports = function(router) {

    var raceRoute = router.route(baseRoute + '/races');
    raceRoute.get(function(req, res) {
        var db = mongoose.connect(secrets.mongo_connection);
        Races.find(function(err, result) {
            res.json(result);
        });
        db.disconnect();
    });

    return router;
};
