import  React,{ Component } from 'react' //通过react来创建组件
import HttpService from '../../js/Service/HttpService'
import $ from 'jquery';
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

// 	    $.ajax({
// 		    url:'http://api.map.baidu.com/telematics/v3/movie?qt=hot_movie',
// 		    // http:api.map.baidu.com/telematics/v3/movie?qt=hot_movie
// 		    data:{
// //                		"ak":"ZFcuCDGuGVT39PI7nmBv51qfylsD2mxj",
// 			    "ak":"tq0Kt0NFYheTCj5mszast0drkIqqVTNn",
// 			    "output":"json",
// 			    "location":searchWord
//
// 		    },
// 		    dataType:'jsonp',
//
// 		    success: function (data) {
// 			    var getJson=data.result;
// 			    console.log(getJson);
// 			    var movices=template('template',getJson);
// 			    console.log(movices);
//
// 			    $('.items').empty();
// 			    $('.items').append(movices);
//
// 			    $('.items').waterfall2();
//
// 			    window.onresize= function () {
// 				    $('.items').waterfall2();
// 			    }
//
//
// 		    },
// 		    error: function () {
// 			    console.log('fail');
// 		    }
//
// 	    })
    }
    render(){
        return (
			
            <div>电影列表{console.log($)} </div>

        )
    }



}
