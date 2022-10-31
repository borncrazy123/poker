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
        // 处理登陆情况
        app.passport.doVerify(req, user, done);

      },
    ),
  );

  // 登陆处理，处理用户信息
  app.passport.verify(async (ctx, user) => {
    // 写数据库信息
    const results = await ctx.service.poker.setPokerUserInfo(user);

    // ctx.logger.debug('debug info');
    if (!results) {
      console.log('登陆出错：user:', user);
      return;
    }

    return user;

  });

  app.passport.serializeUser(async (ctx, user) => {
    return user;
  });

  app.passport.deserializeUser(async (ctx, user) => {
    return user;
  });

};