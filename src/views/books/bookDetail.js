import React from 'react' // 通过react来创建组件

export default class moviceList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieDate: {}, // 电影数据
      isLoading: false
    }
  }
  render() {
    return (
      <div>
        <div>电影列表 </div>

      </div>

    )
  }
}
