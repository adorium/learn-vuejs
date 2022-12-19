<template>
  <div id="app">
    <p style="text-align:center">{{title}}</p>
    <router-view @loginInfo="displayId" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      title:'Welcome to InstaPay'
    }
  },
  methods: {
    displayId: function(user) {
      //console.log(user.userid);
      this.title = user.userid;
    }
  }
}
</script>

<style>
@import './assets/css/layout.css';
</style>