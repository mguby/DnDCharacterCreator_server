var helpers = require('./helpers');
var secrets = require('../config/secrets');
var mongoose = require('mongoose');

module.exports = {
    get : function (schema, req, res) {
        var json = helpers.parseQuery(req.query);
        var db = mongoose.connect(secrets.mongo_connection);
        schema.find(json['where'], json['select'])
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
    }
};