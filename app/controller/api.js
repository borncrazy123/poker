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

    // 打乱洗牌
    async shuffle() {
        const { ctx } = this;
        const results = await ctx.service.poker.shuffle();
        ctx.body = results;
    }

    // 获取所有桌子
    async deskList() {
        const { ctx } = this;
        const results = await ctx.service.poker.deskList();
        ctx.body = results;
    }

    // 获取所有登陆围观人员
    async loginPersonList() {
        const { ctx } = this;
        const results = await ctx.service.poker.loginPersonList();
        ctx.body = results;
    }

}

module.exports = ApiController;
