var getter = require('../util/get_requester');
var Races = require('../models/race');
var Classes = require('../models/class');
var Feats = require('../models/feat');

var baseRoute = '/constants';

module.exports = function(router) {

    var raceRoute = router.route(baseRoute + '/races');
    raceRoute.get(function(req, res) {
        getter.get(Races, req, res);
    });

    var classRoute = router.route(baseRoute +'/classes');
    classRoute.get(function(req, res) {
        getter.get(Classes, req, res);
    });

    var featRoute = router.route(baseRoute +'/feats');
    featRoute.get(function(req, res) {
        getter.get(Feats, req, res);
    });

    return router;
};
