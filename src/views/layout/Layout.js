// 首页组件
import React from 'react' // 通过react来创建组件

import { Layout, Divider, Carousel } from 'antd'

export default class HomeComponent extends React.Component {
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    })
  }
  componentDidMount() {
  }

  render() {
    return (
      <Layout id='echart'>
        <Carousel autoplay>
          <div className='carousel-item '><h3>1</h3><img src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/palmy-pejzazh-plyazh-39461.jpg' alt=''/></div>
          <div className='carousel-item '><h3>2</h3><img src='https://goldwallpapers.com/uploads/posts/hd-wallpaper-beach/hd_wallpaper_beach_001.jpg' alt=''/></div>
          <div className='carousel-item '><h3>3</h3><img src='https://k60.kn3.net/taringa/A/C/E/D/D/F/VCLR/37F.jpg' alt=''/></div>
          <div className='carousel-item '><h3>4</h3><img src='https://k60.kn3.net/taringa/E/7/7/0/D/0/VCLR/EF2.jpg' alt=''/></div>
        </Carousel>
        <hr/>
        <Divider style={{ borderColor: 'red' }}>我是分割线!</Divider>
      </Layout>
    )
  }
}
