// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/*
* 如果在之后的开发中，依然使用template，就需要选择Runtime-Compiler
* 如果在之后的开发中，使用的是 .vue文件开发，那么可以选择Runtime-only
* */


Vue.config.productionTip = false

/* eslint-disable no-new */
/*const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}*/

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 1.普通用法：createElement('标签', {标签的属性}, [标签的内容])
    /*return createElement('h2',
      {class: 'box'},
      ['Hello World', createElement('button', ['按钮'])])*/

    // 2.传入一个组件对象：
    return createElement(App)
  }
})

/*
* runtime-compiler
*   template -> ast -> render -> virtual dom -> UI
*
* runtime-only (1.性能更高 2.代码量更少)
*   render -> virtual dom -> UI
* */
