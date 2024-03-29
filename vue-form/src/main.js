import Vue from 'vue'
import App from './App.vue'

//css
import './assets/css/layout_v.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
