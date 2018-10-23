// 首页组件
import React from 'react' // 通过react来创建组件
import './Home.scss'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
// const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts
import { Layout, Menu, message as Message, Popconfirm } from 'antd'
const SubMenu = Menu.SubMenu
console.dir(SubMenu, 'SubMenu')

import Table from './table.js'

function confirm(e) {
  console.log(e);
  Message.success('Click on Yes');
}
function cancel(e) {
  console.log(e);
  Message.error('Click on No');
}
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
  componentDidMount() {
    Message.success('Click on Yes');
  }

  render() {
    return (
      <Layout id='echart'>
        <Popconfirm title='Are you sure delete this task?' onConfirm={confirm} onCancel={cancel} okText='确认' cancelText='取消'>
          <a href='#'>Delete</a>
        </Popconfirm>
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
