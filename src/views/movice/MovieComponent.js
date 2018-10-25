// 首页组件
import React from 'react' // 通过react来创建组件
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Content, Sider } = Layout
import {
  Route,
  Link
} from 'react-router-dom'
import RequireComponent from '@/utils/require'

export default class MovieComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentList: [], // 组件数据
      isLoading: false
    }
  }
  componentDidMount() {
    // 测试延迟加载组件问题
    setTimeout(() => {
      this.setState({
        componentList: [
          {
            id: 1,
            path: '/movie/inTheaters',
            component: '/movice/inTheaters',
            hidden: false
          },
          {
            id: 2,
            path: '/movie/comingSoon',
            component: '/movice/comingSoon',
            hidden: false
          },
          {
            id: 3,
            path: '/movie/top250',
            component: '/movice/top250',
            hidden: false
          }
        ]
      })
    }, 1000)
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width={200} style={{ background: '#fff', height: '100%' }}>
          <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
            <SubMenu key='sub1' title={<span><Icon type='user' />豆瓣电影</span>}>
              <Menu.Item key='1'><Link to='/movie/inTheaters'>正在热映</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/movie/comingSoon'>即将上映</Link></Menu.Item>
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
            {/* todo 动态加载组件 */}
            {
              this.state.componentList.map((item, index) => {
                return <Route path={item.path} key = { index } {...this.props} component={RequireComponent(item.component)}></Route>
              })
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}
