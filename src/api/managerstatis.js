import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/rest/reportFroms/query',
    method: 'post',
    data
  })
}
