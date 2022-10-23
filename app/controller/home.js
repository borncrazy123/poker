'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    // 登陆判断跳转 
    if (!ctx.isAuthenticated()) {
      await ctx.redirect('/login');
    }

    await ctx.render('home/index.tpl');

  }

  async home() {
    const { ctx } = this;

    // 登陆判断跳转 
    if (!ctx.isAuthenticated()) {
      await ctx.redirect('/login');
    }

    const results = await ctx.service.poker.shuffle();
    // console.log('results:', results);

    const dataList = {
      user: ctx.user,
      data: results,
    };
    
    await ctx.render('home/home.tpl', dataList);

  }

  async authCallback() {
    const { ctx } = this;
    await ctx.render('home/authCallback.tpl');
  }
  
  async login() {
    const { ctx } = this;
    await ctx.render('home/login.tpl');
  }

}

module.exports = HomeController;
