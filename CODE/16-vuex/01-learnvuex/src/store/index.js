import Vue from 'vue'
import Vuex from 'vuex'
import {ADDSTUDENT, DECREMENT, INCREMENT, INCREMENTCOUNT, UPDATEINFO} from "./mutations-types";

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '钮钴禄'
    },
    fullname2(state, getters) {
      return getters.fullname + '乌拉那拉'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

// 2.创建对象
const store = new Vuex.Store({
  /*
  * 这些属性都会被加入到响应式系统中，响应式系统会监听属性的变化，
  *   当属性发生变化时，会通知所有界面中用到该界面的地方，让界面发生刷新
  *
  * 前提：
  *    属性提前在store中初始化了 || 当给state中的对象添加属性时，使用
  *                                 1.Vue.set(obj, 'newProp', 123)
  *                                 2.用新对象给旧对象重新赋值
  * */
  state: {
    counter: 1000,
    students: [
      {id: 110, name: '孙悟空', age: 18},
      {id: 111, name: '猪八戒', age: 28},
      {id: 112, name: '沙和尚', age: 38},
      {id: 113, name: '唐僧', age: 48},
    ],
    info: {
      name: 'yw',
      age: 18,
      height: 1.80
    }
  },
  mutations: {
    //方法
    [INCREMENT](state) {
      state.counter++
    },
    [DECREMENT](state) {
      state.counter--
    },
    [INCREMENTCOUNT](state, payload) {
      // console.log(count);
      state.counter += payload.count
    },
    [ADDSTUDENT](state, stu) {
      state.students.push(stu)
    },
    [UPDATEINFO](state) {
      state.info.name = 'gxy'

      // 错误代码：不能在mutations中进行异步操作
      setTimeout(() => {
        state.info.name = 'gxy'
      }, 1000)

      // 该属性未提前在state中定义，所以不在响应式系统中
      // state.info['address'] = 'xi`an'

      // 该方式可使不是响应式的属性增加响应式
      // Vue.set(state.info, 'address', 'xi`an')


      // 该方式做不到响应式
      // delete state.info.age

      // 该方式可使不是响应式的属性增加响应式
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // context 上下文
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFO)
          console.log(payload);

          resolve('1111111')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age >= age)
      }
    }
  },

  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store
