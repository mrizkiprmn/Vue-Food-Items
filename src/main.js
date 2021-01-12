import '@babel/polyfill'
import store from './store'
// import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import routers from "./routes"
import Vuelidate from 'vuelidate'
// import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor"
// import home from "./views/home"
Vue.config.productionTip = false

Vue.use(Vuelidate)

// Vue.use(VuelidateErrorExtractor, {
//   i18n: false,
//   messages: {
//     required: "{attribute} is required!",
//     notGmail: "{attribute} must gmail address",
//     email: "{attribute} is not a valid Email address.",
//     isEmailAvailable:
//       "{attribute} is not available. Must be at least 10 characters long."
//   }
// })

// Vue.component("Register-inp", templates.singleErrorExtractor.foundation6);



new Vue({
  store : store,
  router : routers,
  render: h => h(App),
}).$mount('#app')
