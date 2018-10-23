import { Http } from '@/utils/request'

// 基本api配置
export default class Api extends Http {
  constructor() {
    super()
    this.loading = false
  }
}

