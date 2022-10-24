'use strict';

const { Controller } = require('egg');

class ApiController extends Controller {
    async logout() {
        const { ctx } = this;
        ctx.logout();
        ctx.body = 'logout success.';
    }

    async pokerList() {
        const { ctx, app } = this;
        const results = await ctx.service.poker.list();

        // const results = await app.mysql.query('select * from tb_1');
        console.log('results:', results);
        ctx.body = results;
    }

    async shuffle() {
        const { ctx } = this;

        const results = await ctx.service.poker.shuffle();
        ctx.body = results;
    }

}

module.exports = ApiController;
