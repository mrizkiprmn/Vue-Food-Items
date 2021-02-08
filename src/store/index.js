import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import auth from './modules/auth'
import Product from './modules/product'
import History from './modules/history'
import Home from './modules/home'
import Cart from './modules/cart'

const vuexLocalStorage =  new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
    modules :{
        Cart,
        Product,
        auth,
        History,
        Home,
    },
    plugins : [vuexLocalStorage.plugin]
})