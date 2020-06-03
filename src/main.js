

import vue from 'babel-polyfill'
import Vue from 'vue'


import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import { SET_PLAY_HISTORY, SET_FAVORITE_LIST } from './store/mutation-types'
import { loadPlay, loadFavorite } from './assets/js/cache'
import { processSongsUrl } from './assets/js/song'


import 'swiper/dist/css/swiper.css'

import './assets/scss/index.scss'
import './stylus/index.styl'
//fastclick.attach(document.body);
import VueAwesomeSwiper from 'vue-awesome-swiper'

fastclick.attach(document.body)

Vue.config.productionTip = false
const historySongs = loadPlay()
processSongsUrl(historySongs).then((songs) => {
  store.commit(SET_PLAY_HISTORY, songs)
})
const favoriteSongs = loadFavorite()
processSongsUrl(favoriteSongs).then((songs) => {
  store.commit(SET_FAVORITE_LIST, songs)
})

/* eslint-disable no-new */
Vue.use(VueLazyLoad,{
	loading:require('./assets/loading.png')
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
 
});
Vue.use(VueAwesomeSwiper) 
 