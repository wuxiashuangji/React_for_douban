// 对应 经营统计 菜单

import Layout from '@/views/layout/Layout'

const businessCharts = {
  path: '/businessCharts',
  component: Layout,
  redirect: 'noredirect',
  name: 'businessCharts',
  alwaysShow: true,
  meta: {
    title: '经营统计',
    icon: 'chart'
  },
  children: [
    {
      path: 'businessList',
      component: () => import('@/views/managerstatis/ManagerReport'),
      name: 'KeyboardChart',
      meta: { title: '经营报表', noCache: true }
    }
    // {
    //   path: 'myChart',
    //   component: () => import('@/views/charts/line'),
    //   name: 'LineChart',
    //   meta: { title: '我的分析', noCache: true }
    // },
    // {
    //   path: 'agentChart',
    //   component: () => import('@/views/charts/mixChart'),
    //   name: 'MixChart',
    //   meta: { title: '代理商分析', noCache: true }
    // }
  ]
}

export default businessCharts
