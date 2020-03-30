import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../pages/Home'
let List = ()=>import(/* webpackChunkName: "List" */ '../pages/List' )
let Detail = ()=>import(/* webpackChunkName: "DEtailCart" */ '../pages/Detail' )
let Cart = ()=>import(/* webpackChunkName: "DEtailCart" */ '../pages/Cart' )
let User = ()=>import(/* webpackChunkName: "UserLoginReg" */ '../pages/User.vue')
let Login = ()=>import(/* webpackChunkName: "UserLoginReg" */ '../pages/Login.vue')
let Reg = ()=>import(/* webpackChunkName: "UserLoginReg" */ '../pages/Reg.vue')
import NoPage from '../pages/NoPage'

let routes = [
	{path:'/home' ,component:Home},
	{path:'/List/:_type',component:List},
	{path:'/Detail/:_id',component:Detail,name:'detail'},
	{path:'/Cart',component:Cart},
	{path:'/Login', component:Login},
	{path:'/Reg' ,component:Reg},
	{path:'/User' ,component:User},
	{path:'/' ,redirect:'/home'},
	{path:'*', component:NoPage},
]

let router = new VueRouter({
	routes,
	mode:'hash'
})

export default router

