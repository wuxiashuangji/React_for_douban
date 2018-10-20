import React from 'react' // 通过react来创建组件
import $ from 'jquery'
import { Spin, Alert, Card, Rate } from 'antd'
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
    // 生命周期 组件挂载完成之后
    this.getMovieData()
  }

  getMovieData() {
    // 1.自己封装方法：
    // HttpService.get_Data_By_fetchJsonp({url:''}).then(response=>{
    //     console.log(response)
    // })
    // 2.使用jq方法：
    const that = this

    $.ajax({
      url: 'https://api.douban.com/' + 'v2/movie/in_theaters',
      type: 'get',
      timeout: 10000, // 超时时间设置，单位毫秒,
      success: function(res) {
        console.log(res)

        that.setState({
          isLoading: false,
          movieDate: res.subjects
        })
      },
      error: function(err) {
        console.log(err)
      },
      dataType: 'jsonp'
    })
  }
  render() {
    return (
      <div>
        <Npgress />
        <h3 style={{ padding: 10, margin: 10 }}>正在热映电影</h3>
        <hr style={{ margin: '10 20' }} />
        {/* {console.log(this.state)}*/}
        {this.state.isLoading ? (
          <Spin tip='Loading...'>
            <Alert
              message='正在加载中。。。。'
              description='请稍后！'
              type='info'
            />
          </Spin>
        ) : (
          ''
        )}
        <div
          className='moviceList'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {this.state.movieDate.map((item, index) => {
            return (
              <Card
                title={item.title}
                key={index}
                extra={
                  <a href='#' id={item.id}>
                    More
                  </a>
                }
                style={{ width: 300, margin: '10px' }}
              >
                <div className='custom-image'>
                  <img alt='example' width='100%' src={item.images.medium} />
                </div>
                <div className='custom-card'>
                  <h3> {item.original_title}</h3>
                  <p>
                    年份：
                    {item.year}
                  </p>
                  <p>
                    电影类型：
                    {item.genres.join(',')}
                  </p>
                  <span>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={0}
                      value={Math.round(item.rating.average / 2)}
                    />
                    {item.rating.average && (
                      <span className='ant-rate-text'>
                        {item.rating.average}{' '}
                      </span>
                    )}
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}
