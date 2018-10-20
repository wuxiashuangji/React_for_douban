// 对应 用户中心 菜单

const userCenter = {
  path: '/userCenter',
  component: (resolve) => require(['@/views/layout/Layout'], resolve),
  redirect: 'noredirect',
  name: 'userCenter',
  meta: {
    title: '用户中心',
    icon: 'user'
  },
  children: [
    {
      path: 'baseInfo',
      component: (resolve) => require(['@/views/userCenter/baseInfo'], resolve),
      name: 'baseInfo',
      meta: {
        title: '基本资料',
        noCache: true
      }
    },
    {
      path: 'ModifyPassword',
      component: (resolve) => require(['@/views/userCenter/ModifyPassword'], resolve),
      name: 'ModifyPassword',
      meta: { title: '修改密码', noCache: true }
    }
    // { // 暂时不做
    //   path: 'myPack',
    // component: (resolve) => require(['@/views/charts/mixChart'], resolve),
    //   name: 'MixChart',
    //   meta: { title: '我的钱包', noCache: true }
    // }
  ]
}

export default userCenter
