import React,{Component} from 'react'
import {formatTime} from '../../util/formatTime'
import {Link} from 'react-router-dom'
import './ListItem.less'
/**
 * Component props
 * @good  Boolean  精华
 * @top  Boolean  置顶
 */
class ListItem extends Component {
   
    render(){
        return (
            <div className="List_Item">
               <div className="top_box">
                    <img src={this.props.data.author.avatar_url} alt=""/>
                    <div className="user_info">
                        <p className="user_name">{this.props.data.author.nickname}</p>
                        <p className="time">{formatTime(this.props.data.create_at)}<span className="actrile_type">#{this.props.data.tab}</span></p>
                    </div>
               </div>
               <div className="center_box">
                   <Link to={`/detail/${this.props.data.id}`} className="link">
                       <p className="title">{this.props.data.title}</p>
                   </Link>
               </div>
               <div className="bottom_box">
                 <div className="icon_item_box">
                     <i className="fa fa-eye"></i>&nbsp;
                     <span className="text">{this.props.data.visit_count}</span>
                 </div>
                 <div className="icon_item_box">
                     <i className="fa fa-comments"></i>&nbsp;
                     <span className="text">{this.props.data.reply_count}</span>
                 </div>
                <div className="icon_item_box">
                    <i className="fa fa-clock-o"></i>&nbsp;
                    <span className="text">{formatTime(this.props.data.create_at)}</span>
                </div>
               </div>
                <div className={this.props.data.good ? 'arcticle_good':'hide'}  >精华</div>
                <div  className={this.props.data.top ? 'arcticle_top' : 'hide'}>置顶</div>
            </div>
        )
    }
}

export default ListItem