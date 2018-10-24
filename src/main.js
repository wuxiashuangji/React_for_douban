/**
 * Created by zorl on 2018/10/23.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import HomeComponent from './views/home/HomeComponent'
import MovieComponent from './views/movice/MovieComponent'
import AboutComponent from './views/about/aboutComponent'
import Tab from './views/table/actionTab'
import Login from './views/login/login.js'
import Register from './views/register/register.js'

import './styles/main.css'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Layout className='layout' style={{ height: '100%' }}>
          {console.log(this.props, '======')}
          <Header>
            <div className='logo' />
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['1']}// 默认进入哪个页面
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'><Link to='/home'>首页</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/movie/inTheaters'>电影</Link></Menu.Item>
              <Menu.Item key='3'><Link to='/tab'>表格</Link></Menu.Item>
              <Menu.Item key='4'><Link to='/about/aboutMe'>关于</Link></Menu.Item>
              <Menu.Item key='5' style={{ marginLeft: '50%' }}><Link to='/register'>登录</Link></Menu.Item>
              <Menu.Item key='6'><Link to='/login'>注册</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ height: '100%' }}>
            <div style={{ background: '#fff', minHeight: 280, height: '100%' }}>
              {/* exact 表示严格匹配*/}
              <Switch>
                <Route exact path='/' component={HomeComponent}></Route>
                <Route path='/home' component={HomeComponent}></Route>
                <Route path='/tab' component={Tab}></Route>
                <Route path='/movie' component={MovieComponent}></Route>
                <Route path='/about' component={AboutComponent}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
              </Switch>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Router>

    )
  }
}
ReactDOM.render(<Main></Main>, document.getElementById('app'))
