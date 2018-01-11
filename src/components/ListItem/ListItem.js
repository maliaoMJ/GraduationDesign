import React,{Component} from 'react'
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
                    <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&s=120" alt=""/>
                    <div className="user_info">
                        <p className="user_name">LuckBoy</p>
                        <p className="time">2小时以前<span className="actrile_type">#share</span></p>
                    </div>
               </div>
               <div className="center_box">
                 <p className="title">曾经有一份真挚的爱情摆在我的面前我却没有好好去珍惜，若果上天给我一次从来的机会，我会对那个妹子说三个字，给我滚，别打扰我学习</p>
               </div>
               <div className="bottom_box">
                 <div className="icon_item_box">
                     <i className="fa fa-eye"></i>&nbsp;
                     <span className="text">1425</span>
                 </div>
                 <div className="icon_item_box">
                     <i className="fa fa-comments"></i>&nbsp;
                     <span className="text">1425</span>
                 </div>
                <div className="icon_item_box">
                    <i className="fa fa-clock-o"></i>&nbsp;
                    <span className="text">2小时前</span>
                </div>
               </div>
            </div>
        )
    }
}

export default ListItem