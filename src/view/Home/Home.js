import React,{Component} from 'react'
import { Tabs} from 'antd-mobile';
import ListItem from '../../components/ListItem/ListItem'
import getDataMethod from '../../util/getData'
import Loadding from '../../components/Loadding/Loadding'


import "./Home.less"
var more = false
const URL = `https://cnodejs.org/api/v1/topics`

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            allResult:[],
            allCurrentPage:1,
            goodResult:[],
            goodCurrentPage:1,
            shareResult:[],
            shareCurrentPage:1,
            askResult:[],
            askCurrentPage:1,
            jobResult:[],
            jobCurrentPage:1,
            testResult:[],
            testCurrentPage:1
        }
    }
  
// 加载数据函数
  getMoreData(that, url, PageNumber, dataType) {

        let allresult = getDataMethod.getDataByGet(`${url}?page=${PageNumber}&tab=${dataType}&limit=20`)
        allresult
            .then((data) => { return data.json() })
            .then((json) => {
                if (json.success) {
                    if (dataType === 'all') {

                        that.setState({
                            allResult: that.state.allResult.concat(json.data),
                            allCurrentPage: that.state.allCurrentPage + 1
                        })
                        
                    } else if (dataType === 'good') {
                        that.setState({
                            goodResult: that.state.goodResult.concat(json.data),
                            goodCurrentPage: that.state.goodCurrentPage + 1
                        })
                    } else if (dataType === 'share') {
                        that.setState({
                            shareResult: that.state.shareResult.concat(json.data),
                            shareCurrentPage: that.state.shareCurrentPage + 1
                        })
                    } else if (dataType === 'ask') {
                        that.setState({
                            askResult: that.state.askResult.concat(json.data),
                            askCurrentPage: that.state.askCurrentPage + 1
                        })
                    } else if (dataType === 'job') {
                        that.setState({
                            jobResult: that.state.jobResult.concat(json.data),
                            jobCurrentPage: that.state.jobCurrentPage + 1
                        })
                    } else if (dataType === 'dev') {
                        that.setState({
                            testResult: that.state.testResult.concat(json.data),
                            testCurrentPage: that.state.testCurrentPage + 1
                        })
                    }
                    more = false
                } else {
                    console.log('请求数据出错！')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


// 无限加载
    /**
     * 
     * @param {*} stateType  state 类型 
     * @param {*} pageNumber 当前page类型以及页码
     * @param {*} type  请求数据的tab 类型
     * 
     */
        
        
    scrollBtoom(that, dataType) {
    let screenY = window.screen.height
    // 默认allPanel
    var typePanel = that.refs.allPanel
    if (dataType === 'all') {
        typePanel = that.refs.allPanel

    } else if (dataType === 'good') {
        typePanel = that.refs.goodPanel
    } else if (dataType === 'share') {
        typePanel = that.refs.sharePanel
    } else if (dataType === 'ask') {
        typePanel = that.refs.askPanel
    } else if (dataType === 'job') {
        typePanel = that.refs.jobPanel
    } else if (dataType === 'dev') {
        typePanel = that.refs.testPanel
    }

    typePanel.addEventListener('scroll', () => {
        var loaddingElementHeight = that.refs.allloaddingElement.getBoundingClientRect().top
        if (dataType === 'all') {
            loaddingElementHeight = that.refs.allloaddingElement.getBoundingClientRect().top
        } else if (dataType === 'good') {
            loaddingElementHeight = that.refs.goodloaddingElement.getBoundingClientRect().top
        } else if (dataType === 'share') {
            loaddingElementHeight = that.refs.shareloaddingElement.getBoundingClientRect().top
        } else if (dataType === 'ask') {
            loaddingElementHeight = that.refs.askloaddingElement.getBoundingClientRect().top
        } else if (dataType === 'job') {
            loaddingElementHeight = that.refs.jobloaddingElement.getBoundingClientRect().top
        } else if (dataType === 'dev') {
            loaddingElementHeight = that.refs.testloaddingElement.getBoundingClientRect().top
        }
        if (screenY - loaddingElementHeight > 70) {
            if (more) {
                return
            } else {
                more = true
                if (dataType === 'all') {
                    that.getMoreData(that, URL, that.state.allCurrentPage, dataType)

                } else if (dataType === 'good') {
                    that.getMoreData(that, URL, that.state.goodCurrentPage, dataType)
                } else if (dataType === 'share') {
                    that.getMoreData(that, URL, that.state.shareCurrentPage, dataType)
                } else if (dataType === 'ask') {
                    that.getMoreData(that, URL, that.state.askCurrentPage, dataType)
                } else if (dataType === 'job') {
                    that.getMoreData(that, URL, that.state.jobCurrentPage, dataType)
                } else if (dataType === 'dev') {
                    that.getMoreData(that, URL, that.state.testCurrentPage, dataType)
                }

            }
        }
    })
}
// 点击切换或者滑动切换 面板
    onTabChange(tab) {
        let dataType = tab.type
        console.log(tab)
        if (dataType === 'all') {
            this.scrollBtoom(this,'all')

        } else if (dataType === 'good') {
            this.scrollBtoom(this,'good')
        } else if (dataType === 'share') {
            this.scrollBtoom(this,'share')
        } else if (dataType === 'ask') {
            this.scrollBtoom(this,'ask')
        } else if (dataType === 'job') {
            this.scrollBtoom(this,'job')
        } else if (dataType === 'dev') {
            this.scrollBtoom(this,'dev')
        }
    }
    render(){
        const tabs = [
            { title: '全部', type:'all'},
            { title: '精华', type:'good'},
            { title: '分享', type:'share'},
            { title: '问答', type:'ask'},
            { title: '招聘', type:'job'},
            { title: '测试', type:'dev'}
        ]
         return(
             <div className="Home" >
            
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={this.onTabChange.bind(this)}
                        onTabClick={this.onTabChange.bind(this)}
                    >
                        <div className="tab_item_panel" >
                         <div className="innerBox" ref="allPanel" >
                                {this.state.allResult.length > 0?this.state.allResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding /> }
                                <div ref="allloaddingElement" className={this.state.allResult.length > 0 ?'loadding_bottom_box':'hide'}>
                                    <i className="fa fa-spinner fa-pulse fa-fw"></i>
                                    <span className="text">加载更多...</span>
                                </div> 
                         </div>                
                        </div>
                        <div className="tab_item_panel">
                         <div className="innerBox" ref="goodPanel" >
                             {this.state.goodResult.length > 0 ? this.state.goodResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding />}
                             <div ref="goodloaddingElement" className={this.state.goodResult.length > 0 ? 'loadding_bottom_box' : 'hide'}>
                                 <i className="fa fa-spinner fa-pulse fa-fw"></i>
                                 <span className="text">加载更多...</span>
                             </div>
                         </div>

                        </div>
                        <div className="tab_item_panel">
                         <div className="innerBox" ref="sharePanel" >
                             {this.state.shareResult.length > 0 ? this.state.shareResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding />}
                             <div ref="shareloaddingElement" className={this.state.shareResult.length > 0 ? 'loadding_bottom_box' : 'hide'}>
                                 <i className="fa fa-spinner fa-pulse fa-fw"></i>
                                 <span className="text">加载更多...</span>
                             </div>
                         </div>
                        </div>
                        <div className="tab_item_panel">
                           
                         <div className="innerBox" ref="askPanel" >
                             {this.state.askResult.length > 0 ? this.state.askResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding />}
                             <div ref="askloaddingElement" className={this.state.askResult.length > 0 ? 'loadding_bottom_box' : 'hide'}>
                                 <i className="fa fa-spinner fa-pulse fa-fw"></i>
                                 <span className="text">加载更多...</span>
                             </div>
                         </div>
                        </div>
                        <div className="tab_item_panel">
                         <div className="innerBox" ref="jobPanel" >
                             {this.state.jobResult.length > 0 ? this.state.jobResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding />}
                             <div ref="jobloaddingElement" className={this.state.jobResult.length > 0 ? 'loadding_bottom_box' : 'hide'}>
                                 <i className="fa fa-spinner fa-pulse fa-fw"></i>
                                 <span className="text">加载更多...</span>
                             </div>
                         </div>

                        </div>
                        <div className="tab_item_panel">
                         <div className="innerBox" ref="testPanel" >
                             {this.state.testResult.length > 0 ? this.state.testResult.map((item) => <ListItem key={item.id} data={item} />) : <Loadding />}
                             <div ref="testloaddingElement" className={this.state.testResult.length > 0 ? 'loadding_bottom_box' : 'hide'}>
                                 <i className="fa fa-spinner fa-pulse fa-fw"></i>
                                 <span className="text">加载更多...</span>
                             </div>
                         </div>

                        </div>
                        
                    </Tabs>
                
                   
                </div>
           
        )
    }
    componentDidMount(){ 
        
        
       
        
        // 初始化
       

        this.getMoreData(this, URL,this.state.goodCurrentPage,'good')
     

        this.getMoreData(this, URL,this.state.shareCurrentPage,'share')
     

       this.getMoreData(this, URL,this.state.askCurrentPage,'ask')
      

        this.getMoreData(this, URL,this.state.jobCurrentPage,'job')
     

        this.getMoreData(this, URL,this.state.testCurrentPage,'dev')


        this.getMoreData(this,URL, this.state.allCurrentPage, 'all')
        this.scrollBtoom(this,'all')
            
    }

}
export default Home