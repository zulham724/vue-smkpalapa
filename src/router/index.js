import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/WelcomePage.vue'
import Dashboard from '../views/DashboardPage.vue'
import MapPage from '../views/MapPage.vue'
import ContactPage from '../views/ContactPage.vue'
import VisiMisiPage from '../views/VisiMisiPage.vue'
import JurusanPage from '../views/JurusanPage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    redirect: '/dashboard',
    component: Home,
    children: [{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }, {
        path: '/map',
        name: 'map',
        component: MapPage
    }, {
        path: '/contact',
        name: 'contact',
        component: ContactPage
    }, {
        path: '/visimisi',
        name: 'visimisi',
        component: VisiMisiPage
    }, {
        path: '/jurusan',
        name: 'jurusan',
        component: JurusanPage
    }]
}, {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
}, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/About.vue')
}]

const router = new VueRouter({
    mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    routes
})

export default router