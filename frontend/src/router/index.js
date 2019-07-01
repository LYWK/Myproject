import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import JoinForm from '@/components/member/JoinForm'
import LoginForm from '@/components/member/LoginForm'
import MemberList from '@/components/member/MemberList'
import UpdateForm from '@/components/member/UpdateForm'
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/member-list', name: 'member-list', component: MemberList},
    {path: '/join-form', name: 'join-form', component: JoinForm},
    {path: '/login-form', name: 'login-form', component: LoginForm},
    {path: '/update-form', name: 'update-form', component: UpdateForm}
  ]
})
