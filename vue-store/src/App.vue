<template>
  <div id="app">
    <LogIn v-on:loginInfo="requestLogin" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue'

export default {
  name: 'App',
  components: {
    LogIn
  },
  methods: {
    requestLogin:function(user) {
      console.log(user);
    }
  }
}
</script>

<style>

</style>
