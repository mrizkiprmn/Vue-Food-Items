import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import VuePersisDate from 'vuex-persistedstate'
import Product from './modules/product'
import History from './modules/history'
import Home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
    modules :{
        Product,
        auth,
        History,
        Home,
    },
    Plugins : [VuePersisDate]
})