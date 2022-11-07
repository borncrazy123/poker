'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, passport } = app;

  // 定义页面URL
  router.get('/', controller.home.index);
  router.get('/index', controller.home.index);
  // router.get('/home', controller.home.home);

  // 鉴权成功后的回调页面
  router.get('/authCallback', controller.home.authCallback);
  // 渲染登录页面，用户输入账号密码
  router.get('/login', controller.home.login);
  // 登出账号 
  router.get('/api/logout', controller.api.logout);

  // 定义接口类API
  router.get('/api/pokerList', controller.api.pokerList);
  router.get('/api/shuffle', controller.api.shuffle);
  router.post('/api/createDesk', controller.api.createDesk);
  router.post('/api/enterDeskByDid', controller.api.enterDeskByDid);
  router.get('/api/getDeskList', controller.api.getDeskList);
  router.get('/api/loginPersonList', controller.api.loginPersonList);
  router.get('/api/getCurrentDeskPersonList', controller.api.getCurrentDeskPersonList);

  // 登录校验
  router.post(
    '/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }),
  );

};
