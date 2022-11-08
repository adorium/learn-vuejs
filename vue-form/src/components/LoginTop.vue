<template>  
  <div class="login-box">
    <img src="../assets/img_logo_navy.png" class='logo'/>
    <form action="" v-on:submit.prevent="submitForm">
      <div>
        <label for="username">ID</label>
        <input type="text" id="username" v-model="userid"/>
      </div>
      <div>
        <label for="password">PW</label>
        <input type="text" id="password" v-model="password"/>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userid:'',
      password:''
    }
  },
  methods: {
    submitForm: function(){
      var user = { "userid":this.userid, "password":this.password, "name":"Instapay User" }
      this.$emit('loginInfo', user);
    }
  }

}
</script>

<style>
.login-box img { max-height:100px; }
</style>