import React,{Component} from 'react'
import './Loadding.less'

class Loadding extends Component {
    render(){
        return (
            <div className="Loadding_box">
                <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                <span className="text">正在加载中...</span>
            </div>
        )
    }
}

export default Loadding