import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import routes from "./routes"
// import home from "./views/home"

Vue.config.productionTip = false

new Vue({
  router : routes,
  render: h => h(App),
}).$mount('#app')
