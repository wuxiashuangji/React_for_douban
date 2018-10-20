import request from '@/utils/request'

export function modifyPassword({ newPassWord }) {
  const data = {
    password: newPassWord
  }
  return request({
    url: '/agentManage/updatePws',
    method: 'post',
    data
  })
}
