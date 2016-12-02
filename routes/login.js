var secrets = require('../config/secrets');
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(router) {

  var registerRoute = router.route('/login');


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
  
  registerRoute.post(passport.authenticate('local', {
  	successRedirect:'http://localhost:3000/#/dashboard', 
  	failureRedirect:'http://localhost:3000/#/login',
  	session: true
  }));
  return router;
}
