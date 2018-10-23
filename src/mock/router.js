// 对应 用户中心 菜单

export const userCenter = [
  {
    'parentId': 'null',
    'value': '/userCenter',
    'name': '用户中心',
    'icon': 'user',
    'htmlTemplet': 'userCenter',
    'adResourcesId': '1102846',
    'selected': 'ture',
    'seq': '0',
    'menuResourcesList': [
      {
        'htmlTemplet': 'userCenter/baseInfo',
        'parentId': 'userCenter',
        'value': 'baseInfo',
        'name': '基本资料'
      },
      {
        'parentId': 'userCenter',
        'htmlTemplet': 'userCenter/ModifyPassword',
        'value': 'ModifyPassword',
        'name': '修改密码'
      }
    ]
  },
  {
    'value': '/agentManage',
    'htmlTemplet': 'agentManage',
    'alwaysShow': 'ture',
    'name': '代理商管理',
    'icon': 'component',
    'menuResourcesList': [
      {
        'value': 'angentList',
        'parentId': 'agentManage',
        'htmlTemplet': 'angentManage/AngentList',
        'redirect': '/agentManage/angentList/list',
        'name': '代理商列表',
        'menuResourcesList': [
          {
            'value': 'list',
            'parentId': 'angentList',
            'htmlTemplet': 'angentManage/AngentList',
            'name': '代理商列表'
          },
          {
            'value': 'edit',
            'parentId': 'angentList',
            'htmlTemplet': 'angentManage/EditAngent',
            'name': '编辑代理商'
          },
          {
            'value': 'add',
            'parentId': 'angentList',
            'htmlTemplet': 'angentManage/NewAngent',
            'name': '新增代理商'
          }
        ]
      }
    ]
  },
  {
    'value': '/businessCharts',
    'name': '经营统计',
    'htmlTemplet': 'businessCharts',
    'alwaysShow': 'ture',
    'icon': 'chart',
    'menuResourcesList': [
      {
        'value': 'businessList',
        'htmlTemplet': 'managerstatis/ManagerReport',
        'parentId': 'businessCharts',
        'name': '经营报表'
      }
    ]
  },
  {
    'value': '/deviceManage',
    'htmlTemplet': 'deviceManage',
    'name': '设备管理',
    'alwaysShow': 'ture',
    'icon': 'list',
    'menuResourcesList': [
      {
        'value': 'deviceList',
        'parentId': 'deviceList',
        'name': '设备列表',
        'htmlTemplet': 'deviceManage/DeviceList'
      }
    ]
  },
  {
    'value': '/insideManage',
    'name': '内部管理',
    'htmlTemplet': 'insideManage',
    'icon': 'peoples',
    'menuResourcesList': [
      {
        'value': 'agentRoleManage',
        'parentId': 'insideManage',
        'htmlTemplet': 'insideManage/agentManage/AgentmanageLayout',
        'name': '一级代理商管理',
        'redirect': '/insideManage/agentRoleManage/agentsList',
        // 'alwaysShow': 'ture',
        'menuResourcesList': [
          {
            'value': 'agentsList',
            'parentId': 'agentRoleManage',
            'htmlTemplet': 'insideManage/agentManage/AgentsList',
            'name': '一级代理商列表',
            'hidden': 'false'
          },
          {
            'value': 'subAgent/:id(\\d+)',
            'parentId': 'agentRoleManage',
            'htmlTemplet': 'insideManage/agentManage/ShowSubAgent',
            'name': '查看下级代理',
            'hidden': 'ture'
          },
          {
            'value': 'createAgent',
            'parentId': 'agentRoleManage',
            'htmlTemplet': 'insideManage/agentManage/AddAgent',
            'name': '代理商新增',
            'hidden': 'ture'
          },
          {
            'value': 'agentEdit/:id(\\d+)',
            'parentId': 'agentRoleManage',
            'htmlTemplet': 'insideManage/agentManage/EditAgent',
            'name': '代理商编辑',
            'hidden': 'ture'
          }
        ]
      },

      {
        'value': 'bdRoleManage',
        'htmlTemplet': 'insideManage/bdManage/BdManageLayout',
        'redirect': '/insideManage/bdRoleManage/bdList',
        'name': 'BD人员',
        'parentId': 'bdRoleManage',
        'menuResourcesList': [
          {
            'value': 'bdList',
            'htmlTemplet': 'insideManage/bdManage/BdList',
            'parentId': 'bdRoleManage',
            'name': 'BD人员列表',
            'hidden': 'false'
          },
          {
            'value': 'addBD',
            'htmlTemplet': 'insideManage/bdManage/AddBd',
            'parentId': 'bdRoleManage',
            'name': '新增BD',
            'hidden': 'ture'
          }
          // {
          //   'value': 'editBD/:id(\\d+)',
          //   'htmlTemplet': 'insideManage/bdManage/editBd',
          //   'parentId': 'bdRoleManage',
          //   'name': '修改BD',
          //   'hidden': 'ture'
          // }
        ]
      }
    ]
  }
]
