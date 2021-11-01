import * as types from "./mutations-types";

export default {
  //方法
  [types.INCREMENT](state) {
    state.counter++
  },
  [types.DECREMENT](state) {
    state.counter--
  },
  [types.INCREMENTCOUNT](state, payload) {
    // console.log(count);
    state.counter += payload.count
  },
  [types.ADDSTUDENT](state, stu) {
    state.students.push(stu)
  },
  [types.UPDATEINFO](state) {
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
}
