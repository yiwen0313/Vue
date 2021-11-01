<template>
  <div id="app">
    <h2>-----------APP内容----------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------APP内容: getters相关信息----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(30)}}</h2>

    <h2>-----------APP内容: info对象的内容是都是响应式的----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改info</button>

    <h2>-----------HelloVuex内容----------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import * as types from "./store/mutations-types"

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是APP组件'
    }
  },
  methods: {
    addtion() {
      this.$store.commit(types.INCREMENT)
    },
    subtraction() {
      this.$store.commit(types.DECREMENT)
    },
    /*
    * 参数被称为mutation的载荷(payload)
    * */
    // payload：载荷，负载
    addCount(count) {
      // 1.普通的提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: types.INCREMENTCOUNT,
        count
      })
    },
    addStudent() {
      const stu = {id: 114, name: '白骨精', age: 999}
      this.$store.commit(types.ADDSTUDENT, stu)
    },
    updateInfo() {
      // this.$store.commit(types.UPDATEINFO)

      // 不优雅
      /*this.$store.dispatch('aUpdateInfo', {
        message: '我是携带的信息',
        success: () => {
          console.log('里面已经完成了')
        }
      })*/

      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res);
        })
    }
  },
}
</script>

<style>
</style>
