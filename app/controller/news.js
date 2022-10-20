'use strict';

const { Controller } = require('egg');

class NewsController extends Controller {
  async list() {

    const results = await this.app.mysql.query('select * from tb_1');
    console.log('----->>>results:', results);

    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
      data: results
    };
    
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;