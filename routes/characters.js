var getter = require('../util/get_requester');
var Character = require('../models/character');

var baseRoute = '/characters';

module.exports = function(router) {

    var characterRoute = router.route(baseRoute);
    characterRoute.get(function(req, res) {
        getter.get(Character, req, res);
    });

    return router;
};
