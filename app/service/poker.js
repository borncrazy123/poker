const Service = require('egg').Service;

class PokerService extends Service {
  async list() {
    const { app } = this;

    const results = await app.mysql.query('select * from tb_1');
    // console.log('results:', results);

    return results;
  }

  // 写入用户相关信息
  async setPokerUserInfo(_user) {
    console.log('_user:', _user);
    const { app } = this;

    // 数据里不存在则注册

    // 检测对应用户名存不存在
    const pokerUserResults = await app.mysql.query('select * from poker_user where name = "' + _user.username + '"');
    console.log('pokerUserResults:', pokerUserResults);
    if (pokerUserResults.length != 0) {
      // 存在对应用户名的话再看下密码对不对
      const pokerUserPwdResults = await app.mysql.query('select * from poker_user where name = "'
        + _user.username + '" and pwd = "' + _user.password + '"');
      if (pokerUserPwdResults.length == 0) {
        console.log('用户密码不对.');
        return false;
      } else {
        return true;
      }
    } else {
      // 不存在测直接注册一个
      const userInfoResult = await this.app.mysql.insert('poker_user', {
        name: _user.username,
        pwd: _user.password,
      });
      if (userInfoResult.affectedRows === 1) {
        return true;
      } else {
        console.log('用户信息入库注册失败.');
        return false;
      }

    }

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

  async createDesk(_deskInfo) {
    const deskInfoResult = await this.app.mysql.insert('poker_desk', {
      name: _deskInfo.name,
      desc: _deskInfo.desc,
    });
    if (deskInfoResult.affectedRows === 1) {
      return true;
    } else {
      console.log('新建桌子失败.');
      return false;
    }
  }

  async getDeskList() {
    const pokerDeskResults = await this.app.mysql.query('select * from poker_desk');
    // // 当前先写死只有2个桌子，后面写入数据库吧
    // let deskList = [
    //   { id: 1, name: '桌1', peson_cnt: 8 },
    //   { id: 2, name: '桌2', peson_cnt: 6 },
    // ];

    pokerDeskResults.map((pokerDeskInfo) => {
      pokerDeskInfo.peson_cnt = 8;
    });

    return pokerDeskResults;
  }

  async loginPersonList() {
    // 当前先写定已有8个人登陆，后面从数据库里读吧
    let loginPersonList = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
      { id: 6, name: 'f' },
      { id: 7, name: 'g' },
      { id: 8, name: 'h' },
    ];

    return loginPersonList;
  }

  getCurrentDeskPersonList(_desk_id) {
    // 当前先写定已有8个人登陆，后面从数据库里读吧
    let loginPersonList = [[], [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
      { id: 6, name: 'f' },
      { id: 7, name: 'g' },
      { id: 8, name: 'h' },
    ], [
      { id: 11, name: '1a' },
      { id: 12, name: '2b' },
      { id: 13, name: '3c' },
      { id: 14, name: '4d' },
      { id: 15, name: '5e' },
      { id: 16, name: '6f' },
    ]];

    return loginPersonList[_desk_id];
  }

}

module.exports = PokerService;