import React , {Component} from 'react'
import { formatTime } from '../../util/formatTime'
import './commentsListItem.less'


class CommentsListItem extends Component {

    render(){
        const author = this.props.data.author
        return (
            <div className="commentsListItem">
                 <div className="top_comments_box">
                    <div className="info">
                        <img src={author.avatar_url} alt="" />
                        <div className="text">
                            <p className="nickname">{author.loginname}</p>
                            <p className="time">&nbsp;&nbsp;{formatTime(this.props.data.create_at)}</p>
                        </div>
                    </div>
                    <div className="icon_box">
                        <i className="fa fa-thumbs-up"></i>
                        <i className="fa fa-comments"></i>
                    </div>
                 </div>
                <div className="center_comments_box">
                    <p className="content" dangerouslySetInnerHTML={{ __html: this.props.data.content }}>
                       {/* 评论内容 */}
                   </p>
                </div>
                
            </div>
        )
    }
}

export default CommentsListItem