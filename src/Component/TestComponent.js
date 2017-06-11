//测试组件
import  React,{ Component } from 'react' //通过react来创建组件
//创建完成一个test组件
// 通过export  default 让外部能够访问当前组件
import {
   HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Home extends  Component{
    componentDidMount(){
        console.log('home初始化完成');
    }
    componentWillUnmount(){
        console.log('home删除');
    }
    componentWillReceiveProps(){
        console.log('props被修改了');
    }
    render(){
        console.log(this.props);
        return <h1>home1</h1>
    }
}
class Movie extends  Component{
    componentDidMount(){
        console.log('Movie初始化完成');
    }
    componentWillUnmount(){
     console.log('Movie删除');
    }
    render(){
        return <h1>Movie</h1>
    }
}
export  default  class TestComponent extends  Component{
    render(){
        //router相当于 容器 路由表的配置
        //link 相当于a标签
        //Route 相当于规则
        //
        return (

                <Router>
                    <div>
                        <div>
                            <Link to="/home/1">Home1</Link>
                            <Link to="/movie">Movie</Link>
                        </div>
                        <div>
                            <Route path="/home/:page?" component={Home}></Route>
                            <Route path="/movie" component={Movie}></Route>
                        </div>
                    </div>
                </Router>
           )
    }
}