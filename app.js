const LocalStrategy = require('passport-local').Strategy;

module.exports = (app) => {
  
  // 挂载 strategy
  app.passport.use(
    new LocalStrategy(
      {
        // usernameField: 'username',
        // passwordField: 'password',
        passReqToCallback: true,
        // session: false,
      },
      (req, username, password, done) => {
        // format user
        const user = {
          provider: 'local',
          username,
          password,
        };
        // debug('%s %s get user: %j', req.method, req.url, user);
        app.passport.doVerify(req, user, done);
      },
    ),
  );

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    ctx.logger.debug('debug info');
    return user;
  });
  app.passport.serializeUser(async (ctx, user) => {
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    return user;
  });
  
};