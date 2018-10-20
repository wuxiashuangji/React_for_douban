import request from '@/utils/request'
import { clearSession } from '@/utils/savaSession'
export function loginByUsername(username, password, verifyCode) {
  const data = {
    username: username,
    password: password,
    verifyCode: verifyCode
  }
  return request({
    url: '/rest/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/rest/logout',
    method: 'post'
  }).then(res => {
    clearSession('addRoute')
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
