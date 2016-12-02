var secrets = require('../config/secrets');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(router) {

  var dashboardRoute = router.route('/dashboard');

  dashboardRoute.get(ensureAuthenticated, function(req, res) {
  	console.log(req.session);
  	res.json({ message: 'logged in', data: [] });
  });


  function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		console.log(req.session);
		res.json({ message: 'not logged in', data: [] });
	}
}
  return router;
}