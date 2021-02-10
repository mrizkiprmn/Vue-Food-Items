import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
// import auth from './modules/auth'
import Cart from './modules/cart'

const vuexLocalStorage =  new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
    modules :{
        Cart,
    },
    plugins : [vuexLocalStorage.plugin]
})