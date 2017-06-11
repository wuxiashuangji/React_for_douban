//首页组件
import  React,{ Component } from 'react' //通过react来创建组件
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import in_theaters from './in_theaters.js'
import coming_soon from './coming_soon.js'
import top250 from './top250.js'

export  default  class MovieComponent extends  Component{
    render(){
        return (
            <Layout  style={{ height: '100%' }}>
                <Sider width={200} style={{ background: '#fff',height:'100%'}}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
                        <SubMenu key="sub1" title={<span><Icon type="user" />豆瓣电影</span>}>
                            <Menu.Item key="1"><Link to='/movie/in_theaters'>正在热映</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/movie/coming_soon'>即将上映</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/movie/top250'>Top250</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />豆瓣读书</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                        </SubMenu>

                    </Menu>


                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/*<Breadcrumb style={{ margin: '12px 0' }}>*/}
                        {/*<Breadcrumb.Item>*/}
                           {/*<a href="#/home">首页</a>*/}
                        {/*</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>*/}
                             {/*<a href="#/movie">电影</a>*/}
                        {/*</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>*/}
                             {/*<a href="#/about">关于</a>*/}
                        {/*</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Content style={{ background: '#fff', padding:' 24px  24px 0 24px', margin: 0, minHeight: 280 }}>
                        {/*path为相对根路径 ，path=‘/movie/in_theaters’ 相当于匹配的是localhost+/movie/in_theaters*/}
                        <Route path='/movie/in_theaters' component={in_theaters}></Route>
                        <Route path='/movie/coming_soon' component={coming_soon}></Route>
                        <Route path='/movie/top250' component={top250}></Route>
                        
                    </Content>
                </Layout>
            </Layout>
        )
    }
}