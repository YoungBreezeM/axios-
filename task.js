/*
 * @Author: your name
 * @Date: 2021-01-24 11:42:58
 * @LastEditTime: 2021-01-26 12:08:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daka/index.js
 */
let axios = require('axios');
const schedule = require('node-schedule');

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
    console.log(new Date() + " " + item.username + " 打卡成功")
    if (users.length > 0 && res.ok === true) {
      task(users.shift())
    }

  }

}





const scheduleCronstyle = () => {
  //每天1点打卡
  console.log('自动打开已开启');
  schedule.scheduleJob({ hour: 01, minute: 01 }, () => {
    if (users.length > 0) {
      task(users.shift())
    }
  });
}

scheduleCronstyle();




