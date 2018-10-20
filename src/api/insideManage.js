import request from '@/utils/request'

export default class insideManageAPI {
  // 获取agent列表
  static async getAgentList(query) {
    return request({
      url: '/agentManage/queryAgents',
      method: 'get',
      params: query
    })
  }
  // 新增agent
  static async addAgent(data) {
    return request({
      url: '/insideManage/addAgent',
      method: 'post',
      data
    })
  }
  // 查询 代理商 信息
  static async getAgentInfo(agentUserId) {
    return request({
      url: '/agentManage/getAgent',
      method: 'get',
      params: { agentUserId }
    })
  }
  // 添加/修改代理商/BD
  static async updateAgentInfo(data) {
    return request({
      url: '/agentManage/addOrUpdateAgent',
      method: 'post',
      data
    })
  }
  // 新增 BD
  static async addBD(data) {
    return request({
      url: '/agentManage/addOrUpdateAgent',
      method: 'post',
      data
    })
  }
  // 更新 BD 数据
  static async updateBDInfo(data) {
    return request({
      url: '/insideManage/addAgent',
      method: 'post',
      data
    })
  }
  // 获取bd账号列表
  static async getBDList(param) {
    return request({
      url: '/agentManage/getUserByRole',
      method: 'get',
      params: param
    })
  }
  // 获取商户信息
  static async getShanghuInfo(phone) {
    return request({
      url: '/agentManage/getMerchant',
      method: 'get',
      params: {
        phone
      }
    })
  }
  // 获取 获取经营项目 列表
  static async getBusinProjects(params) {
    return request({
      url: '/agentManage/getAgentBusiness',
      method: 'get',
      params: {
        params
      }
    })
  }
}

