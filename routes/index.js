/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {
  app.use('/api', require('./home.js')(router));
  app.use('/api', require('./register.js')(router));
  app.use('/api', require('./login.js')(router));
  app.use('/api', require('./logout.js')(router));
  app.use('/api', require('./dashboard.js')(router));
  app.use('/api', require('./constants.js')(router));
  app.use('/api', require('./characters.js')(router));
};