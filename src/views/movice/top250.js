import React from 'react' // 通过react来创建组件
// 引入progress  进度条
import Npgress from '../common/progress.js'

// 输出 class moviceList
export default class moviceList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieDate: [], // 电影数据
      isLoading: true
    }
  }

  componentDidMount() {
    this.getMovieData()
  }

  getMovieData() {
    // 1.自己封装方法：
    // HttpService.get_Data_By_fetchJsonp({url:''}).then(response=>{
    //     console.log(response)
    // })
    // 2.使用jq方法：
  }
  render() {
    return (
      <div>
        <Npgress />
        <h3 style={{ padding: 10, margin: 10 }}>Top250电影</h3>
        <hr style={{ margin: '10 20' }} />
        {/* {console.log(this.state)}*/}
        <div
          className='moviceList'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          Top250电影
        </div>
      </div>
    )
  }
}
