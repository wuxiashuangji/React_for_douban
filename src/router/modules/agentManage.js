// 对应 设备管理 菜单
import Layout from '@/views/layout/Layout'

const agentManage = {
  path: '/agentManage',
  component: Layout,
  redirect: 'noredirect',
  name: 'agentManage',
  alwaysShow: true,
  meta: {
    title: '代理商管理',
    icon: 'component'
  },
  children: [
    {
      path: 'agentList',
      component: () => import('@/views/agentManage/AgentLayout'),
      name: 'agentsList',
      redirect: '/agentManage/angentList/list',
      meta: { title: '代理商列表', noCache: true },
      children: [
        {
          path: 'list',
          component: () => import('@/views/agentManage/AgentList'),
          name: 'agentList',
          meta: { title: '代理商列表', noCache: true }
        }
        // {
        //   path: 'edit',
        //   hidden: true,
        //   component: () => import('@/views/angentManage/EditAgent'),
        //   name: 'editAgent',
        //   meta: { title: '编辑代理商' }
        // },
        // {
        //   path: 'add',
        //   hidden: true,
        //   component: () => import('@/views/angentManage/NewAgent'),
        //   name: 'addAgent',
        //   meta: { title: '新增代理商' }
        // }
      ]
    }
  ]
}

export default agentManage
