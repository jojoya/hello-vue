import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/views/Main'
// import Login from '@/views/Login'
import Main from '../views/Main'
import Login from '../views/Login'
import Header from "../components/Header";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login }, //登录页
    { path: '/login', name: 'Login', component: Login }, //登录页
    { path: '/main', name: 'Main', component: Main },   //首页
    { path: '/header', name: 'Header', component: Header },   //首页
  ]
})
