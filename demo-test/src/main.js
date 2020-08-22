import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import install from './components/index.js'
import vueConfig from '../../vue.config'

Vue.use(install)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
