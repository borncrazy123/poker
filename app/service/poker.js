const Service = require('egg').Service;

class PokerService extends Service {
  async list() {
    const { app } = this;

    const results = await app.mysql.query('select * from tb_1');
    // console.log('results:', results);

    return results;
  }

  async shuffle() {
    //生成m张牌
    let m = 52
    let arr = new Array(m);
    for (let i = 0; i < m; i++) {
      arr[i] = i;
    }
    //每次抽出一张牌，需要遍历整个数组，所以很耗时。
    let arr2 = new Array();
    for (let i = m; i > 0; i--) {
      let rnd = Math.floor(Math.random() * i);
      arr2.push(arr[rnd]);
      arr.splice(rnd, 1);
    }
    return arr2;

  }

}

module.exports = PokerService;