var getter = require('../config/get_requester');
var Races = require('../models/race');

var baseRoute = '/constants';

module.exports = function(router) {

    var raceRoute = router.route(baseRoute + '/races');
    raceRoute.get(function(req, res) {
        getter.get(Races, req, res);
    });

    return router;
};
