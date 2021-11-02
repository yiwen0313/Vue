import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})


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


axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
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
  /*.then(results => {
      console.log(results);
    })*/

