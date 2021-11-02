import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})


axios({
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
})
