import React,{Component} from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import ListItem from '../../components/ListItem/ListItem'

import "./Home.less"



class Home extends Component{

 
    render(){
        const tabs = [
            { title: '全部', type:'all'},
            { title: '精华', type:'good'},
            { title: '分享', type:'share'},
            { title: '问答', type:'ask'},
            { title: '招聘', type:'job'},
            { title: '测试', type:'test'}
        ]
         return(
            <div className="Home">
            
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div className="tab_item_panel">
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                          <ListItem/>
                         
                        </div>
                        <div className="tab_item_panel">Content of second tab</div>
                        <div className="tab_item_panel">Content of third tab </div>
                        <div className="tab_item_panel">Content of four tab </div>
                        <div className="tab_item_panel">Content of five tab </div>
                        <div className="tab_item_panel">Content of six tab </div>
                        
                    </Tabs>
                    <WhiteSpace />
                   
                </div>
           
        )
    }
}
export default Home