import request from '@/utils/request'

export function getDeviceType() {
  return request({
    url: '/equipment/getEquipments',
    method: 'get'
  })
}
