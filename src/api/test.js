import ApiBase from './apiBase'

class Test extends ApiBase {
  async getAuthorList(param = { query: 121212, name: 'zorl' }) {
    return await this.get('/wechat/author',
      param
    )
  }
  async getUserInfo(param = { userId: 121212 }) {
    return await this.get('/wechat/user/Info',
      param
    )
  }
  async getArticles(param = { userId: 121212 }) {
    return await this.get('/wechat/article',
      param
    )
  }
  async getRouterList(param = { userId: 121212 }) {
    return await this.get('/wechat/getRouters',
      param
    )
  }
  async getMoviceList(param = { userId: 121212 }) {
    return await this.get('/wechat/moviceList',
      param
    )
  }
}
export default new Test()
