'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, passport } = app;

  // 定义页面URL
  router.get('/', controller.home.index);

  // 鉴权成功后的回调页面
  router.get('/authCallback', controller.home.authCallback);
  // 渲染登录页面，用户输入账号密码
  router.get('/login', controller.home.login);
  // 登出账号 
  router.get('/api/logout', controller.api.logout);

  // 定义接口类API
  router.get('/api/pokerList', controller.api.pokerList);
  // router.get('/api/shuffle', controller.api.shuffle);
  

  // 登录校验
  router.post(
    '/login', passport.authenticate('local', { successRedirect: '/' }),
  );
  router.get(
    '/', passport.authenticate('local', { successRedirect: '/authCallback', failureRedirect: '/login' }),
  );
  router.get(
    '/api/shuffle', passport.authenticate('local', { successRedirect: '/authCallback', failureRedirect: '/login' }),
  );

  router.get('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

};
