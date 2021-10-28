import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
