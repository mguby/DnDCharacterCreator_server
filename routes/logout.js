var secrets = require('../config/secrets');

module.exports = function(router) {

  var logoutRoute = router.route('/logout');

  logoutRoute.get(function(req, res) {
  	console.log("logged out");
  	req.logout();
  	res.redirect('http://localhost:3000/#/login');
  });
  return router;
}
