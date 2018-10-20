import request from '@/utils/request'

export function getDeviceList(data) {
  return request({
    url: '/equipment/getEquipmentList',
    method: 'get',
    params: data
  })
}
