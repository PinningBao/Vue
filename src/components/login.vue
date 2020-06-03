<template>
  <div class="login">
    <div>
      <input placeholder="请输入用户名" v-model="name" clearable class="input_style"></input>
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div>
      <input placeholder="请输入密码" v-model="pwd" show-password class="input_style"></input>
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div>
      <button type="primary" @click="login" class="login_style">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        name: '',
        pwd : '',
        error : {
          name: '',
          pwd : ''
        }

      }
    },
    methods:{
      login(){
        const { name, pwd, $router} = this
        this.$router.push({
          name: "home",
          params: {
            username: this.name
          }
        });
      }
    }
  }
</script>

<style>
  .login{
    padding-top:15%;
    
    height:500px;
    background-color:white;
    border:bolder;
  }
  .input_style{
    width:200px;
    text-align:center; 
    margin-bottom: 10%;;
    border:solid green;
    font-size:15px;
    }  
  input{
  display:block;
  margin:0 auto;
  }
  .login_style{
  width:200px;

  }
  button{
  display:block;
  height:30px;
  font-size:18px;
  color:green;
  font-weight:bolder;
  margin:0 auto 8%;
  background-color:none;
  border-radius:30%;
  border:solid;
  }
  #app{

  }
</style>


