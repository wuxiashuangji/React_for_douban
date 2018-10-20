import request from '@/utils/request'

export function getAuthInfo() {
  return request({
    url: '/agentManage/getAgent',
    method: 'get'
  })
}
