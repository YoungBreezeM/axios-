/*
 * @Author: your name
 * @Date: 2021-01-24 11:42:58
 * @LastEditTime: 2021-01-26 11:23:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daka/index.js
 */
var axios = require('axios');


let { login } = require('./login');
let { submit } = require('./daka');
const { users } = require('./info');

let task = async function (item) {
  let data = await axios(login(item))
    .then(response => {
      return response.data;
    })

  if (data.code === 0) {
    let res = await axios(submit(data.data.phpSessionId, item.form))
      .then(response => {
        return response.data;
      })
    console.log(item.username + " 打卡成功")
    if (users.length > 0 && res.ok === true) {
      task(users.shift())
    }

  }

}

if (users.length > 0) {
  task(users.shift())
}





