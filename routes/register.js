var secrets = require('../config/secrets');
var User = require('../models/user');

module.exports = function(router) {

  var registerRoute = router.route('/register');

  registerRoute.post(function(req, res) {
  	console.log("POST");
  	var name = req.body.name;
		var email = req.body.email;
		var username = req.body.username;
		var password = req.body.password;
		var password2 = req.body.password2;

		var newUser = new User({
			name: name,
			email:email,
			username: username,
			password: password
		});

		var promise = newUser.save();
		promise.then(function (result) {
			res.redirect('http://fa16-cs498rk-011.cs.illinois.edu:4000/#/login");
		})
		.catch(function(err){
			res.status(500).json({ message: 'ERROR', data: [] });
		});

  });
  return router;
}


