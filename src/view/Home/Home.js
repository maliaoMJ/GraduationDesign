import React,{Component} from 'react'
import { Tabs} from 'antd-mobile';
import ListItem from '../../components/ListItem/ListItem'
import getDataMethod from '../../util/getData'
import Loadding from '../../components/Loadding/Loadding'


import "./Home.less"



class Home extends Component{
   constructor(props){
       super(props)
       this.state={
           allResult:[]
       }
   }
 
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
                         {this.state.allResult.length > 0?this.state.allResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding /> }
                         <div className={this.state.allResult.length > 0 ?'loadding_bottom_box':'hide'}>
                             <i className="fa fa-spinner fa-pulse fa-fw"></i>
                             <span className="text">加载更多...</span>
                          </div>                 
                        </div>
                        <div className="tab_item_panel">Content of second tab</div>
                        <div className="tab_item_panel">Content of third tab </div>
                        <div className="tab_item_panel">Content of four tab </div>
                        <div className="tab_item_panel">Content of five tab </div>
                        <div className="tab_item_panel">Content of six tab </div>
                        
                    </Tabs>
                
                   
                </div>
           
        )
    }
    componentDidMount(){
        let allresult = getDataMethod.getDataByGet('https://cnodejs.org/api/v1/topics?page=1&tab=all&limit=20')
        allresult
        .then((data)=>{return data.json()})
        .then((json)=>{
            if(json.success){
              this.setState({
                  allResult:json.data
              })
            }else{
                console.log('请求数据出错！')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
export default Home