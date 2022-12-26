<template>
  <div id="app">
    <p style="text-align:center">{{title}}</p>
    <top-nav></top-nav>
    <router-view @loginInfo="displayId" />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';

export default {
  name: 'App',
  data: function() {
    return {
      title:'Welcome to InstaPay'
    }
  },
  components: {
    TopNav,
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