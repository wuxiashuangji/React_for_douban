import NProgress from 'nprogress'
import React from 'react'
// 引入nprogress的css
import 'nprogress/nprogress.css'

export default class Npgress extends React.Component {
  componentWillMount() {
    this.NpgressStart()
  }
  componentDidMount() {
    this.NpgressDone()
  }
  render() {
    return (<div></div>)
  }

  NpgressStart() {
    NProgress.start()
  }
  NpgressDone() {
    NProgress.done()
  }
}
