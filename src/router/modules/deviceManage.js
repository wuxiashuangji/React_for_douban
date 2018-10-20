// 对应 设备管理 菜单

import Layout from '@/views/layout/Layout'

const deviceManage = {
  path: '/deviceManage',
  component: Layout,
  redirect: 'noredirect',
  name: 'deviceManage',
  alwaysShow: true,
  meta: {
    title: '设备管理',
    icon: 'list'
  },
  children: [
    {
      path: 'deviceList',
      component: () => import('@/views/deviceManage/DeviceList.vue'),
      name: 'deviceList',
      meta: { title: '设备列表', noCache: true }
    }
  ]
}

export default deviceManage
