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
        // console.log('results:', results);
        ctx.body = results;
    }

    // 打乱洗牌
    async shuffle() {
        const { ctx } = this;
        const results = await ctx.service.poker.shuffle();
        this.getPokerDetailMap();
        ctx.body = results;
    }

    // 新建桌子
    async createDesk() {
        const { ctx } = this;
        // console.log('_deskInfo:', ctx.request.body);
        const results = await ctx.service.poker.createDesk(ctx.request.body);
        ctx.body = results;
    }

    // 获取所有桌子
    async getDeskList() {
        const { ctx } = this;
        const results = await ctx.service.poker.getDeskList();
        ctx.body = results;
    }

    // 玩家申请加入桌子
    async enterDeskByDid() {
        const { ctx } = this;
        // console.log('_deskInfo:', ctx.request.body);
        const results = await ctx.service.poker.enterDeskByDid(ctx.request.body);
        ctx.body = results;
    }

    // 玩家主动或被动退出桌子
    async exitDeskByUid() {
        // 找到所有UID对应的用户，设置为退出态就好了
        const { ctx } = this;
        const results = await ctx.service.poker.exitDeskByUid();
        ctx.body = results;
    }

    // 获取所有登陆围观人员
    async loginPersonList() {
        const { ctx } = this;
        const results = await ctx.service.poker.loginPersonList();
        ctx.body = results;
    }

    async getCurrentDeskPersonList() {
        const { ctx } = this;
        const query = ctx.query;
        // console.log('query:', query);

        const results = await ctx.service.poker.getCurrentDeskPersonList(query.id);
        ctx.body = results;
    }

    // 定义牌的对应关系
    getPokerDetailMap() {
        let pokerDeailMap = {};
        // 初始化R
        // {0:'R1',1:'R2'}
        for (let i = 0; i < 13; i++) {
            pokerDeailMap[i] = 'R' + (i + 1);
        }
        // 初始化D
        for (let i = 13; i < 26; i++) {
            pokerDeailMap[i] = 'D' + (i - 13 + 1);
        }
        // 初始化B
        for (let i = 26; i < 39; i++) {
            pokerDeailMap[i] = 'B' + (i - 26 + 1);
        }
        // 初始化M
        for (let i = 39; i < 52; i++) {
            pokerDeailMap[i] = 'M' + (i - 39 + 1);
        }
        // 初始化K
        for (let i = 52; i < 54; i++) {
            pokerDeailMap[i] = 'K' + (i - 52 + 1);
        }
        // console.log('pokerDeailMap:', pokerDeailMap);
    }

}

module.exports = ApiController;
