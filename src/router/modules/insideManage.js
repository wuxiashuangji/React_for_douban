// 对应 订单管理 菜单
import Layout from '@/views/layout/Layout'

const insideManage = {
  path: '/insideManage',
  component: Layout,
  redirect: 'noredirect',
  name: 'insideManage',
  meta: {
    title: '内部管理',
    icon: 'peoples'
  },
  children: [
    {
      path: 'bdList',
      component: () => import('@/views/insideManage/bdManage/BdList'),
      name: 'bdList',
      meta: { title: 'BD人员列表' },
      hidden: false
    },
    {
      path: 'oneAgentsList',
      component: () => import('@/views/insideManage/agentManage/AgentsList'),
      name: 'oneAgentsList',
      meta: { title: '一级代理商列表' },
      hidden: false
    }
  ]
}

export default insideManage
