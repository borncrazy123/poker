'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  // 定义页面URL
  router.get('/', controller.home.index);

  // 定义接口类API
  router.get('/api/pokerList', controller.api.pokerList);
  
};
