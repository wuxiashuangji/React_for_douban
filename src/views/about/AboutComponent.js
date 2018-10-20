// 首页组件
import React from 'react' // 通过react来创建组件
import './style.scss'
export default class AboutComponent extends React.Component {
  render() {
    return (
      <div className='desc'>
        <p style={{ padding: '10px', marginTop: '10px' }}>哈哈哈哈哈哈</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio dolore explicabo eos quo illum molestiae iure omnis, error libero nostrum! Culpa veritatis iusto officiis consectetur, voluptate numquam nostrum incidunt!
        <span style={{ float: 'right' }}>2016-11-20</span>
      </div>
    )
  }
}
