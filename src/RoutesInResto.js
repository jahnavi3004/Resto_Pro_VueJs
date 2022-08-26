import HomeSite from './components/HomeSite.vue';
import SignUp from './components/SignUp.vue';
import LoginSite from './components/LoginSite.vue';
import AddResto from './components/AddResto.vue';
import UpdateResto from './components/UpdateResto.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'HomeSite',
        component:HomeSite,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginSite',
        component:LoginSite,
        path:'/login'
    },
    {
        name:'AddResto',
        component:AddResto,
        path:'/addresto'
    },
    {
        name:'UpdateResto',
        component:UpdateResto,
        path:'/updateresto/:id'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router