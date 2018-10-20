import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { routerFormat } from '../utils/routerFormat'
import { getSession } from '../utils/savaSession'
Vue.use(Router)

/* Layout */
const Layout = (resolve) => require(['@/views/layout/Layout'], resolve)
/* Router Modules */
// import businessChartsRouter from './modules/businessCharts'
// import agentManageRouter from './modules/agentManage'
// import deviceManageRouter from './modules/deviceManage'
// import userCenterRouter from './modules/userCenter'
// import insideManageRouter from './modules/insideManage'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes personCenterd mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
const addRoute = getSession('addRoute') && JSON.parse(getSession('addRoute'))
// console.log(routes)
export let constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    // component: () => import('@/views/errorPage/404'), // 由于出现诡异的404页面跳转，先暂时将其路由映射到首页
    component: Layout, // 由于出现诡异的404页面跳转，先暂时将其路由映射到首页
    hidden: true,
    children: [
      {
        path: '/',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/insideManage',
    component: Layout,
    redirect: '/insideManage/bdRoleManage',
    name: 'insideManage',
    hidden: true,
    meta: {
      title: '内部管理',
      icon: 'peoples'
    },
    children: [
      {
        path: '/editBD',
        component: () => import('@/views/insideManage/bdManage/EditBd'),
        name: 'editBD',
        meta: { title: '修改BD' },
        hidden: true
      },
      {
        path: '/addBD',
        component: () => import('@/views/insideManage/bdManage/AddBd'),
        name: 'addBD',
        meta: { title: '新增BD' },
        hidden: true
      },
      {
        path: '/subAgent',
        component: () => import('@/views/insideManage/agentManage/ShowSubAgent'),
        name: 'subAgent',
        meta: { title: '查看下级代理' },
        hidden: true
      },
      {
        path: '/createOneAgent',
        component: () => import('@/views/insideManage/agentManage/AddAgent'),
        name: 'createOneAgent',
        meta: { title: '代理商新增' },
        hidden: true
      },
      {
        path: '/oneAgentEdit',
        component: () => import('@/views/insideManage/agentManage/EditAgent'),
        name: 'oneAgentEdit',
        meta: { title: '代理商编辑' },
        hidden: true
      }
    ]
  },
  {
    path: '/agentManage',
    component: Layout,
    redirect: 'noredirect',
    name: 'agentManage',
    hidden: true,
    meta: {
      title: '代理商管理',
      icon: 'component'
    },
    children: [
      {
        path: '/list',
        component: () => import('@/views/agentManage/AgentsList'),
        name: 'agentList',
        meta: { title: '代理商列表' },
        hidden: true
      },
      {
        path: '/add',
        component: () => import('@/views/agentManage/NewAgent'),
        name: 'editAgent',
        meta: { title: '新增代理商' },
        hidden: true
      },
      {
        path: '/edit',
        hidden: true,
        component: () => import('@/views/agentManage/EditAgent'),
        name: 'addAgent',
        meta: { title: '编辑代理商' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

// const addRouters = getSession('addRouters') && JSON.parse(getSession('addRouters'))
if (addRoute) {
  constantRouterMap = constantRouterMap.concat(routerFormat(addRoute))
  store.dispatch('setLoadedFlag', true)
  console.log(store)
}
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     }
  //   ]
  // },
  /** When your routing deviceManage is too long, you can split it into small modules**/
  // userCenterRouter
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },

]
