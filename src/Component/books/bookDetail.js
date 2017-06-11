import  React,{ Component } from 'react' //通过react来创建组件
import HttpService from '../../js/Service/HttpService'
export default class moviceList extends React.Component{

    constructor(props){
        super(props)
        this.state={
            movieDate:{},//电影数据
            isLoading:false
        }

    }



    getMovieData(){
        HttpService.get_Data_By_fetchJsonp({url:''}).then(response=>{
            console.log(response)
        })
    }
    render(){
        return (
            <div>
            <div>电影列表 </div>

            </div>

        )
    }



}
