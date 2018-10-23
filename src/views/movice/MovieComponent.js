// 首页组件
import React from 'react' // 通过react来创建组件
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Content, Sider } = Layout
import {
  Route,
  Link
} from 'react-router-dom'

import inTheaters from './inTheaters.js'
import comingSoon from './comingSoon.js'
import top250 from './top250.js'

export default class MovieComponent extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width={200} style={{ background: '#fff', height: '100%' }}>
          <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
            <SubMenu key='sub1' title={<span><Icon type='user' />顶级菜单</span>}>
              <Menu.Item key='1'><Link to='/movie/inTheaters'>豆瓣正在热映</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/movie/comingSoon'>表格</Link></Menu.Item>
              <Menu.Item key='3'><Link to='/movie/top250'>Top250</Link></Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title={<span><Icon type='laptop' />豆瓣读书</span>}>
              <Menu.Item key='5'>option5</Menu.Item>
            </SubMenu>

          </Menu>

        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: ' 24px  24px 0 24px', margin: 0, minHeight: 280 }}>
            {/* path为相对根路径 ，path=‘/movie/inTheaters’ 相当于匹配的是localhost+/movie/inTheaters*/}
            <Route path='/movie/inTheaters' component={inTheaters}></Route>
            <Route path='/movie/comingSoon' component={comingSoon}></Route>
            <Route path='/movie/top250' component={top250}></Route>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
