import Vue from 'vue'
import router from './router'
import vuetify from 'vuetify'
import Layout from './components/Layout.vue'
import store from './store'

Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify: new vuetify(),
  render: h => h(Layout),
  store,
  el: '#app'
})
