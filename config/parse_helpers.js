module.exports = {
    parseSelect : function(query) {
        var json = eval("("+query+")");
        var params = [];
        for(var key in json) {
            if(json.hasOwnProperty(key) && json[key] === 1) {
                params.push(key);
            }
        }
        return params.join(' ');
    }
};