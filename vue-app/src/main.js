import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router, // 配置路由
  store, // 可以通过this.$store进行访问
  render: h => h(App)
}).$mount('#app')
 
