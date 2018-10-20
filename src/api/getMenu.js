import request from '@/utils/request'

export function getMenu() {
  return request({
    url: '/authority/getCatalogAndMenu',
    method: 'get'
  })
}
