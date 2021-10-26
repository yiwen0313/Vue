<template>
  <div id="app">
<!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

<!--<router-link to="/home" tag="button" replace >首页</router-link>-->
<!--<router-link to="/about" tag="button" replace>关于</router-link>-->

<!-- <button @click="clickHome">首页</button>-->
<!-- <button @click="clickAbout">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>

   <!--
     URL：
        协议://主机:端口/路径?查询
        scheme://host:port/path?query#fragment
    -->
    <router-link :to="{path: '/profile', query: {name: 'yw', age: '18'}}">档案</router-link>

<!--    <button @click="clickUser">用户</button>-->
<!--    <button @click="clickProfile">档案</button>-->

    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    clickHome() {
      // 通过代码的方式修改路由
      this.$router.push('/home')
      // this.$router.replace('/home')
      // console.log('clickHome');
    },
    clickAbout() {
      this.$router.push('/about')
      // this.$router.replace('/about')
      // console.log('clickAbout');
    },
    clickUser() {
      this.$router.push('/user/' + this.userId)
    },
    clickProfile() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'gxy',
          age: 20
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active {
    color: #f00;
  }
</style>
