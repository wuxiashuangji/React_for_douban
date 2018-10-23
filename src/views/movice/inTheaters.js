import React from 'react' // 通过react来创建组件
import { Spin, Alert, Card, Rate } from 'antd'
import testApi from '@/api/test'
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
  async componentDidMount() {
    // 生命周期 组件挂载完成之后
    const moviceList = await testApi.getMoviceList()
    this.setState({
      movieDate: moviceList.data.list,
      isLoading: false
    })
  }
  async componentWillUnmount() {
    this.setState({
      isLoading: false
    })
  }
  clickhandler(props) {
    // 点击事件
    console.log(props, 'props')
  }
  render() {
    return (
      <div>
        <Npgress />
        <h3 style={{ padding: 10, margin: 10 }}>正在热映电影</h3>
        <hr style={{ margin: '10 20' }} />
        {/* {console.log(this.state)}*/}
        {this.state.isLoading ? (
          <Spin tip='Loading...'> <Alert message='正在加载中。。。。' description='请稍后！' type='info'/> </Spin>) : ('')}
        <div
          className='moviceList'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {this.state.movieDate.map((item, index) => {
            return (
              <Card title={item.title} key={index} extra={<a href='#' id={item.id}> More </a>} style={{ width: 300, margin: '10px' }} onClick = {this.clickhandler.bind(this, { item, props: this.props })}>
                <div className='custom-image'>
                  <img alt='example' width='100%' src={item.images.medium} />
                </div>
                <div className='custom-card'>
                  <h3> {item.original_title}</h3>
                  <p>年份： {item.year} </p>
                  <p>
                    电影类型：
                    {item.genres.join(',')}
                  </p>
                  <span>
                    <Rate disabled allowHalf defaultValue={0} value={Math.round(item.rating.average / 2)}/>
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

