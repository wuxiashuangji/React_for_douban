// 首页组件
// import  React,{ Component } from 'react' //通过react来创建组件
import fetchJsonp from 'fetch-jsonp' // 通过react来创建组件

export default {

  get_Data_By_fetchJsonp: function(Option) {
    return fetchJsonp(Option.url)
      .then((response) => {
        return response.json()
      })
  }

}
