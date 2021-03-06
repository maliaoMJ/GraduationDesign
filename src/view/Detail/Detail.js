import React ,{Component} from 'react'
import TitleHeader from '../../components/TitleHeader/TitleHeader'
import Loadding from '../../components/Loadding/Loadding'
import getData from '../../util/getData'
import CommentsListItem from '../../components/commentsListItem/commentsListItem'
import { formatTime } from '../../util/formatTime'
import 'github-markdown-css'
import './Detail.less'

class Detail extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            detailContent:{},
            user:{},
            comments:[],
            showFlag:false,
            commentContext:''
        }    
    }
    // 关闭评论面板
    closePanel(){
        this.setState({
            showFlag:!this.state.showFlag
        })
    }
    // 打开评论面板--评论文章
    openCommentsPanel(articleId) {
        console.log(articleId)
        this.setState({
           showFlag:!this.state.showFlag,
           commentContext:''
        })
    }
    // 打开品论面板--回复评论
    replyComments(events){
        console.log(events.target.id)
        this.setState({
            showFlag: !this.state.showFlag,
            commentContext: ''
        })
    }
    // 接收评论内容
    getCommentsContext(e){
      console.log(e.target.value)
      this.setState({
          commentContext:e.target.value
      })
    }
    // 提交评论
    onSubmit(){

    }
    render(){
        const COMMENTS = this.state.comments
        return (
            <div className="Detail">
                
                <TitleHeader title={this.state.detailContent.title} history={this.props.history}/>
                {this.state.detailContent.author == null||undefined?<Loadding/>:(
                    <div className="box">
                            <div className="user_header ">
                                <img src={this.state.user.avatar_url} alt="没有见过这么帅的图像吗？" />
                                <div className="user_info clearfix">
                                    <span className="nickname">{this.state.user.loginname}</span><span className="time">{formatTime(this.state.detailContent.last_reply_at)}</span>
                                    <span className="floor_faster">#楼主</span>
                                </div>
                            </div>
                        
                        
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
                                <div className="comments_header">
                                    <p><i className="fa fa-comments"></i> 共{this.state.detailContent.reply_count}条评论</p>
                                </div>
                                {COMMENTS.length <= 0 ? (<div className="nocomments">
                                    暂无评论，赶快去吐槽一下吧！
                                </div>) : 
                                    (this.state.comments.map((item)=>{
                                        return (<CommentsListItem data={item} key={item.id} openPanel={this.replyComments.bind(this)}/>)
                                    }))
                                }
                            </div>
                        </div>
                        <div className="write_comments">
                            <div className="button_box" onClick={this.openCommentsPanel.bind(this,this.state.detailContent.id)}>
                                <i className="fa fa-pencil"></i>
                            </div>
                            <div className={this.state.showFlag ? 'panel show' : 'panel hide'}>
                                <div className='panel_box'>
                                    <div className="close_button" onClick={this.closePanel.bind(this)}>
                                        &times;
                                    </div>
                                    <div className="input_box">
                                        <textarea placeholder="吐槽点什么吧,支持markdown语法" onChange={this.getCommentsContext.bind(this)} name="" id="" cols="30" rows="10">
                                        </textarea>
                                    </div>
                                    <div className="botton_box">
                                        <div className="button button-close" onClick={this.closePanel.bind(this)}>取消</div>
                                        <div className="button button-submit" onClick={this.onSubmit.bind(this)}>提交</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
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
                user:json.data.author,
                comments:json.data.replies
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }


}



export default Detail