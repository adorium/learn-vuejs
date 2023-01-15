<template>
  <div id="app">
    <!-- <global-notifications></global-notifications> -->
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
button.block { width:100%; }
button.primary { background-color:var(--primary);color:var(--text-light);}
button.primary:hover { background-color:var(--ip-green-hover); border-color:var(--ip-green-hover);}
</style>