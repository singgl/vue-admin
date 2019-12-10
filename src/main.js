import Vue from 'vue'
import '@/style/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
