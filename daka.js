/*
 * @Author: your name
 * @Date: 2021-01-24 12:13:00
 * @LastEditTime: 2021-01-26 08:52:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daka/daka.js
 */
let qs = require('qs');
let daka = (cookie) => {
  return {
    method: 'get',
    url: 'https://bsm.schoopia.com/wap/health/record',
    headers: {
      'Cookie': 'PHPSESSID=' + cookie
    }
  }
};



let submit = (cookie, data) => {
  return {
    method: 'post',
    url: "https://bsm.schoopia.com/wap/health/record/save/new",
    headers: {
      'Cookie': 'PHPSESSID=' + cookie,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
  }
}

module.exports = {
  daka,
  submit
}