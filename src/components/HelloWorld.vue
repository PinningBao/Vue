<template>
<div class="helloworld">
<div class='first'>

<img :src="require('../assets/helloworld.png')" alt=""width="415"height="730" >

</div>
<router-view></router-view>

<router-link to='/home'>
  <p>登录</p>
  <p>注册</p>


  <p>游客访问</p>
  </router-link>
 

</div>
</template>

<script>
export default {
  name:'HelloWorld',
  
}

    
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helloworld{
  background-color:white;
position:fixed;
}
.first{
display:block;
margin:auto;


}

p{
  margin-top:-35%;
  text-align:center;
 background-color:white;
color:black;
font-size:18px;
margin-bottom: -10%;
}

</style>
<script>


</script>

