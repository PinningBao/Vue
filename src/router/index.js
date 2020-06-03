import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/home'
import Songs from  '@/components/songs/songs'
import Singer from '@/components/singer/singer'

import Disc from'@/components/disc/disc'
import Center from '@/components/center/user-center'
import PlayList from '@/components/playlist/playlist'
	const routes = [

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',

      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home,
        children:[
      {
        path:':id',
        component: Disc
      }
      ]
     
    },
      {
        path:'/singer',
        component: Singer,
        children:[
      {
        path:':id',
        component: Songs
      }
      ]
    },
    {
      path:'/personal',
      component:Center,
    },
  	 {
  	 	path:'*',
  	 	redirect:'/'
  	 },
  	 ,
     {
      path:'/playlist',
      component:PlayList
     }
  ];
  export default new Router({
  	routes
  });
