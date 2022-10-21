'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg........';

    const results = await app.mysql.query('select * from tb_1');
    console.log('results:', results);

    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
      data: results
    };
    
    await ctx.render('home/home.tpl', dataList);

  }
}

module.exports = HomeController;
