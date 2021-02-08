import '@babel/polyfill'
import store from './store'
// import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import routers from "./routes"
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

Vue.use(Vuelidate)




new Vue({
  store: store,
  router : routers,
  render: h => h(App),
}).$mount('#app')
