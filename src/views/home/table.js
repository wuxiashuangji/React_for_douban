import { Layout, Table, Icon } from 'antd'
import React from 'react'

// 操作更多的下拉菜单开始
import { Menu, Dropdown, Checkbox } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>修 改</a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>移 动</a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>禁 止</a>
    </Menu.Item>
  </Menu>
)

// 操作更多的下拉菜单结束
const data = []

for (let i = 0; i < 2000; i++) {
  data.push({
    key: i + 1,
    name: `zorl-${i}`,
    age: Math.floor(Math.random() * 100),
    address: `New York No. ${i + 1} Lake Park`,
    isChecked: Math.floor(Math.random() * 10) >= 5
  })
}

export default class TableList extends React.Component {
  tableOnChang(props) {
    console.log(props, '首页table被点击')
  }
  render() {
    const columns = [
      {
        title: '操 作',
        dataIndex: 'isChecked',
        key: 'isChecked',
        render: isChecked => <Checkbox defaultChecked={isChecked} onChange = {this.tableOnChang.bind(this, this.props)}>Checkbox</Checkbox>
      },
      {
        title: '序 号',
        dataIndex: 'key',
        key: 'key',
        render: text => <span style={{ color: 'red' }}>{text}</span>
      },
      {
        title: '操 作',
        key: 'action',
        render: (text, record) => (
          <span>
            {/* <a href="#">操作 一 {record.name}</a>*/}
            <a href='#'>查 看 </a>
            <span className='ant-divider' />
            <a href='#' type='danger'>删 除 </a>
            <span className='ant-divider' />
            {/*
              <a href="#" className="ant-dropdown-link">
                 更多操作  <Icon type="down" />
              </a>
            */}
            <Dropdown overlay={menu}>
              <a className='ant-dropdown-link' href='#'>
                更多操作 <Icon type='down' />
              </a>
            </Dropdown>
          </span>
        )
      }]
    return (
      <Layout>
        <Table columns={columns} dataSource={data} style={{ marginTop: 20, padding: 5, backgroound: '#0094ff' }}/>
      </Layout>

    )
  }
}
