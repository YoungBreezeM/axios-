/*
 * @Author: your name
 * @Date: 2021-01-24 11:45:27
 * @LastEditTime: 2021-01-26 08:42:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daka/login.js
 */
let qs = require('qs');
let data = qs.stringify({
  'cmd': 'prepare',
  'company_code': 'youcai',
  'login_type': 'password',
  'device': '1',
  'key': '10919171210106',
  'password': 'yqf19980217'
});

let login = () => {
  return {
    method: 'post',
    url: 'https://bsm.schoopia.com/login/web?t=0.7932705999178721',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  }
};

exports.login = login;