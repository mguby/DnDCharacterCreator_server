var secrets = require('../config/secrets');
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(router) {

  var loginRoute = router.route('/login');


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password != user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log("logged in");
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
  
  loginRoute.post(passport.authenticate('local', {failureRedirect:'http://fa16-cs498rk-011.cs.illinois.edu:4000/#/login'}),
  function(req, res) {
    res.redirect('http://fa16-cs498rk-011.cs.illinois.edu:4000/#/dashboard' + req.user.username);
  });
  return router;
}

