'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg........';

    const results = await ctx.service.poker.list();
    // console.log('results:', results);

    const dataList = {
      data: results
    };
    
    await ctx.render('home/home.tpl', dataList);

  }
}

module.exports = HomeController;
