// 首页组件
import React from 'react' // 通过react来创建组件
import './Home.scss'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
// const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts
import { Layout, Menu } from 'antd'
const SubMenu = Menu.SubMenu
console.dir(SubMenu, 'SubMenu')

import Table from './table.js'

export default class HomeComponent extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
    data: [
      { name: '产品 A', uv: 4000 },
      { name: '产品 B', uv: 3000 },
      { name: '产品 C', uv: 2000 },
      { name: '产品 D', uv: 2600 },
      { name: '产品 E', uv: 1890 },
      { name: '产品 F', uv: 2390 },
      { name: '产品 G', uv: 3490 }
    ]
  };
  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    })
  }
  render() {
    return (
      <Layout id='echart'>
        <LineChart width={600} height={300} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type='monotone' dataKey='uv' stroke='#8884d8' />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
        </LineChart>
        <Table></Table>
      </Layout>
    )
  }
}
