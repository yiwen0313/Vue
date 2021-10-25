import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/*
* 那么.vue文件中的template是有谁处理的？
*   - 由vue-template-compiler
* */

// render -> virtual dom -> UI
