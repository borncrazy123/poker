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

  async deskList() {
    // 当前先写死只有2个桌子，后面写入数据库吧
    let deskList = [
      { id: 1, name: '桌1' },
      { id: 2, name: '桌2' },
    ];

    return deskList;
  }

  async loginPersonList() {
    // 当前先写定已有6个人登陆，后面从数据库里读吧
    let loginPersonList = [
      { id: 1, name: 'person1' },
      { id: 2, name: 'person2' },
      { id: 3, name: 'person3' },
      { id: 4, name: 'person4' },
      { id: 5, name: 'person5' },
      { id: 6, name: 'person6' },
    ];

    return loginPersonList;
  }

}

module.exports = PokerService;