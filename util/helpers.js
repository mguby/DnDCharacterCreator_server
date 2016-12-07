var ph = require('./parse_helpers');

module.exports = {
    createResponse : function (message, data) {
        return {"message": message, "data": data};
    },
    parseQuery: function (query) {
        var json = {};
        json['where'] = query['where'] !== undefined ? eval("(" + query['where'] + ")") : {};
        json['select'] = query['select'] !== undefined ? ph.parseSelect(query['select']) : '';
        json['sort'] = query['sort'] !== undefined ? eval("(" + query['sort'] + ")") : '';
        json['limit'] = query['limit'] !== undefined ? parseInt(query['limit']) : 0;
        json['skip'] = query['skip'] !== undefined ? parseInt(query['skip']) : 0;
        json['count'] = query['count'] !== undefined ? (query['count'] === 'true') : false;
        return json;
    },
    getCharId : function(req) {
        return req._parsedUrl.pathname.substr(12);
    }
};