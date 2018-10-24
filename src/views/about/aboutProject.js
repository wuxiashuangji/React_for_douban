import React from 'react'
import { Card, Icon, Avatar, Layout, Divider } from 'antd';
const { Meta } = Card
export default class AboutMe extends React.Component {
  render() {
    return (
      <Layout>
        <h3 style={{ lineHeight: '60px', color: 'grey', textAlign: 'center', fontWeight: 'bolder', fontSize: '26px' }}>关于项目</h3>
        <Divider />
        <Card
          style={{ width: 500, margin: '50px auto' }}
          cover={<img alt='example' src='https://k60.kn3.net/taringa/E/7/7/0/D/0/VCLR/EF2.jpg' />}
          actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}
        >
          <Meta
            avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
            title='zorl'
            description='　习近平说：“衷心地感谢你们，我也相信你们又会重整行装再出发，又会到祖国最需要的地方去，功不可没，劳苦功高，而且这就是你们人生的价值。要为自己感到自豪，我们也为你们感到自豪。一个国家筚路蓝缕、坎坷奋进到今天这一步，逢山开路、遇水搭桥，你们这是最形象的体现，中国特色社会主义就这么走过来的，一国两制就这么走过来的。”'
          />
        </Card>
      </Layout>
    )
  }
}

