import React ,{Component} from 'react'
import TitleHeader from '../../components/TitleHeader/TitleHeader'
import Loadding from '../../components/Loadding/Loadding'
import getData from '../../util/getData'
import commentsListItem from '../../components/commentsListItem/commentsListItem'
import { formatTime } from '../../util/formatTime'
import 'github-markdown-css'
import './Detail.less'

class Detail extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            detailContent:{},
            user:{}
        }
    }

    render(){
        return (
            <div className="Detail">
                
                <TitleHeader title={this.state.detailContent.title} history={this.props.history}/>
                {this.state.detailContent.author == null||undefined?<Loadding/>:(
                    <div className="user_header ">
                        <img src={this.state.user.avatar_url} alt="没有见过这么帅的图像吗？" />
                        <div className="user_info clearfix">
                            <span className="nickname">{this.state.user.loginname}</span><span className="time">{formatTime(this.state.detailContent.last_reply_at)}</span>
                            <span className="floor_faster">#楼主</span>
                        </div>
                    </div>
                )}
                
                <div className="detail_content">
                    <h3 className="title">{this.state.detailContent.title}</h3>
                    <div className="tip_icon_box">
                        <div className="icon_item"><i className="fa fa-eye"></i>&nbsp;{this.state.detailContent.visit_count}</div>
                        <div className="icon_item"><i className="fa fa-comments"></i>&nbsp;{this.state.detailContent.reply_count}</div>
                    </div>
                    <div className="content_html" dangerouslySetInnerHTML={{ __html: this.state.detailContent.content }}>
                        {/* 文章内容 */}
                    </div>
                    <div className="comments_box">
                        <commentsListItem></commentsListItem>
                    </div>
                </div>
            </div>
        )
    }
    
    componentDidMount() {
        const URL = `https://cnodejs.org/api/v1/topic/`
        let articleId = this.props.match.params.id
        getData.getDataByGet(URL+articleId)
        .then(data=>data.json())
        .then(json=>{
            console.log(json)
            this.setState({
                detailContent:json.data,
                user:json.data.author
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }


}



export default Detail