var secrets = require('../config/secrets');

module.exports = function(router) {

  var logoutRoute = router.route('/logout');

  logoutRoute.get(function(req, res) {
  	console.log("logged out");
  	req.logout();
  	res.redirect('http://fa16-cs498rk-011.cs.illinois.edu:4000/#/login');
  });
  return router;
}
