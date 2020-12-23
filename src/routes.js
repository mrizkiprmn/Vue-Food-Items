import Vue from 'vue' 
import VueRouter from "vue-router"
import Home from "./views/Home"
import History from "./views/History"

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    mode:'history',
    routes: [
    {
        path: "/",
        name : "Home",
        component: Home
    },
   
    {
        path: "/history",
        name: "History",
        component: History,
        props: true,
},



  ],
})

export default mainRouter