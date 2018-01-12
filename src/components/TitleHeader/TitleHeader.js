import React,{Component} from 'react'
import './TitleHeader.less'

class TitleHeader extends Component {
    
    // 回退
    goBack(){
        this.props.history.go(-1)
    }
    // 分享函数
    share(){
        alert('暂时未开发此功能！')
    }
    render(){
        return (
            <div className="TitleHeader">
                <i className="left_icon fa fa-arrow-left" onClick={this.goBack.bind(this)}></i>
                <h4>{this.props.title}</h4>
                <i className="left_icon fa fa-share-alt" onClick={this.share}></i>   
            </div>
        )
    }
   
}

export default TitleHeader