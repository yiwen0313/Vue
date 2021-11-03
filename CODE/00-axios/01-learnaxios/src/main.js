import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

//-----------------3.使用全局的axios和对应的配置在进行网络请求------------------
// 1.axios的基本使用
/*axios({
  'url': 'http://152.136.185.210:7878/api/hy66/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  // url: 'http://152.136.185.210:7878/api/hy66/home/data?type=sell&page=1'
  url: 'http://152.136.185.210:7878/api/hy66/home/data',
  // 专门针对get请求的参数拼接
  params: {
    type: 'sell',
    page: 1
  }
}).then(res => {
  console.log(res);
})*/



/*axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
axios.defaults.timeout = 5000

//2.axios的并发请求
axios.all([axios({
  'url': '/home/multidata'
}), axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 4
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))
  /!*.then(results => {
      console.log(results);
    })*!/

axios({
  url: '/category'
})*/



//-----------------4.创建对应axios的实例------------------

/*const instance1 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/hy66',
  timeout: 5000
});

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
});

instance1({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 4
  }
}).then(res => {
  console.log(res);
})*/



//----------------------5.封装request模块-------------------------
import {request} from "./network/request"

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).then(err => {
  console.log(err);
})



// 方法二对应的
/*request({
  baseConfig: {
    url: '/home/multidata'
  },
  success: function(res) {
    console.log(res);
  },
  failure: function (err) {
    console.log(err);
  }
})*/


// 方法一对应的
/*request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})*/
