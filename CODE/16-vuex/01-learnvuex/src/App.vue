<template>
  <div id="app">
    <h2>-----------APP内容----------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>

    <h2>-----------APP内容: getters相关信息----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(30)}}</h2>

    <h2>-----------HelloVuex内容----------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

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
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
</style>
