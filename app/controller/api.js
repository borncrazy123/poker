'use strict';

const { Controller } = require('egg');

class ApiController extends Controller {
    async pokerList() {
        const { ctx, app } = this;

        const results = await app.mysql.query('select * from tb_1');
        console.log('results:', results);

        ctx.body = results;

    }
}

module.exports = ApiController;
