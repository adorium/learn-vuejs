<template>
  <div id="app">
    <!--<p style="text-align:center">{{info}}</p>-->
    <!-- <notifications></notifications> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      info:'Welcome to InstaPay',
      userid:'',
    }
  },
}
</script>

<style>
@import './assets/css/layout.css';
@import './assets/css/ip-colors.css';
</style>