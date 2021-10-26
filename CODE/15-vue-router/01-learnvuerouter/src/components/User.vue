<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户的相关信息，啦啦啦</p>
    <h2>{{userId}}</h2>
    <h3>{{$route.params.userId}}</h3>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
