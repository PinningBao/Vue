<template>
  <div id="app">
 
     <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
   
  </div>
</template>

<script>
import Player from './components/player/player.vue';
export default {
  name: 'App',
 components:{
 Player
 }
}
</script>
<style>

#app{
	background-color:white;
}
</style>
 