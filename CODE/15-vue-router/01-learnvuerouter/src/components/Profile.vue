<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log('Profile create')
  },
  destroyed() {
    console.log('Profile destroyed');
  }
}
</script>

<style scoped>

</style>
