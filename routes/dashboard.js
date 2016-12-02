var secrets = require('../config/secrets');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(router) {

  var dashboardRoute = router.route('/dashboard');

  dashboardRoute.get(ensureAuthenticated, function(req, res) {
  	//console.log(req.session);
  	res.json({ message: 'logged in'});
  });


  function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//console.log(req.session);
		res.json({ message: 'not logged in'});
    //res.redirect('http://localhost:3000/#/login');
	}
}
  return router;
}