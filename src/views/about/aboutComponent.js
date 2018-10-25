// 首页组件
import React from 'react' // 通过react来创建组件
import './style/aboutHome.scss'
import { Layout, Menu } from 'antd';
import Npgress from '@/views/common/progress'
import {
  HashRouter as Router, Route, Link, Redirect, Switch
} from 'react-router-dom'
const { Content, Sider } = Layout;

import AboutMe from './aboutMe.js'
import AboutProject from './aboutProject'
import About from './aboutComponent'

console.log(About, '-- About --')
console.log(Redirect, '-- Redirect --')
export default class AboutComponent extends React.Component {
  state = {
    loading: true
  }

  onChange = (checked) => {
  }

  render() {
    return (
      <Router>
        <Layout >
          <Npgress/>
          <Sider style = {{ backgroundColor: 'white' }}>
            <Menu
              theme='light'
              mode='inline'
              defaultSelectedKeys={['1']}// 默认进入哪个页面
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'><Link to={{
                pathname: '/about/aboutMe/1555',
                search: 'id=1212&name=zorl',
                params: {
                  name: 'zorl',
                  age: 80
                },
                // hash: '#20181024',
                state: { statue: 100 }
              }}>关于我</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/about/aboutProject'>关于项目</Link></Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route path='/about/aboutMe/:id' exact component={AboutMe} ></Route>
              <Route path='/about/aboutProject' exact component={AboutProject} />
            </Switch>
          </Content>
        </Layout>
      </Router>
    );
  }
}
