<template>
  <div style="text-align:center">
    <login-top v-on:loginInfo="requestLogin"></login-top>
    <p>{{userData.name}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import LoginTop from './components/LoginTop.vue';

export default {
  data:function() {
    return {
      str:'Instapay Store Login',
      userData:{
        id:'',
        pw:'',
        token:'',
        name:''
      }
    }
  },
  components: {
    'login-top': LoginTop
  },
  methods: {
    requestLogin: function(user) {
      this.userData.id = user.userid;
      this.userData.pw = user.password; 
      this.userData.name = user.name;

      var url = 'https://jsonplaceholder.typicode.com/users';
      //var url = "https://api.Instapay.kr/s1/login?aid=d20ah-ol17w-03p30-15b05-e05dc&pack=";
      axios.post(url, this.userData)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
    }
  }

}
</script>

<style>
body { min-height:800px; }
</style>