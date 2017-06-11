import { Layout,Table, Icon } from 'antd';
import React,{Component} from 'react'


// 操作更多的下拉菜单开始
import { Menu, Dropdown} from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">修 改</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">移 动</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">禁 止</a>
    </Menu.Item>
  </Menu>
);

const columns = [{
  title: '姓 名',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '年 龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '地 址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操 作',
  key: 'action',
  render: (text, record) => (
    <span>
      {/*<a href="#">操作 一 {record.name}</a>*/}
      <a href="#">查 看 </a>
      <span className="ant-divider" />
      <a href="#" type='danger'>删 除 </a>
      <span className="ant-divider" />
      {/*<a href="#" className="ant-dropdown-link">
         更多操作  <Icon type="down" />
      </a>*/}
       <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
            更多操作 <Icon type="down" />
            </a>
        </Dropdown>
    </span>
  ),
}];
// 操作更多的下拉菜单结束





const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
},{
  key: '3',
  name: 'Jim Green',
  age: 52,
  address: 'London No. 1 Lake Park',
}, {
  key: '4',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


export default class TableList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
                <Layout>
                    <Table columns={columns} dataSource={data} style={{marginTop:20,padding:5,backgroound:'#0094ff',}}/>
                </Layout>



        )
    }
}
