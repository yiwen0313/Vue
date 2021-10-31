<template>
  <div id="app">
    <h2>-----------APP内容----------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>

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
