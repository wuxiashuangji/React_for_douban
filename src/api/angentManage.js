import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/agentManage/queryAgents',
    method: 'get',
    params: query
  })
}

export function getCode(query) {
  return request({
    url: '/agentManage/sendCode',
    method: 'get',
    params: query
  })
}

export function update(data) {
  return request({
    url: '/agentManage/addOrUpdateAgent',
    method: 'post',
    data
  })
}

export function getAngent(query) {
  return request({
    url: '/agentManage/getAgent',
    method: 'get',
    params: query
  })
}

export function getMerchant(query) {
  return request({
    url: '/agentManage/getMerchant',
    method: 'get',
    params: query
  })
}
