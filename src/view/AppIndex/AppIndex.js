import React ,{Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import Home from '../Home/Home'
import Edit from '../Edit/Edit'
import Message from '../Message/Message'
import User from '../User/User'

import './AppIndex.less'


class AppIndex extends Component {
    constructor(props){
		super(props)
		this.state = {
			selectTab:'Home',
			currentView: <Home />
		}
	}
	//选择当前的可视区的页面
	selectPage(typePage){

		let currentViewPage = <Home />
		
		if(typePage === 'Home'){
			this.props.history.push('/index/home')
			currentViewPage = <Home/>
		} else if (typePage === 'Edit'){
			this.props.history.push('/edit')
			currentViewPage = <Edit />
		} else if (typePage === 'Message'){
			currentViewPage = <Message />
		} else if (typePage === 'User'){
			currentViewPage = <User />
		}

		this.setState({
			selectTab: typePage,
			currentView: currentViewPage
		})
	}
    routerView(){
		return (
			<div className="box">
				<Switch>
					<Route  path={'/index/home'} component={Home}></Route>
					<Route  path={'edit'} component={Edit}></Route>
					<Route  path={'message'} component={Message}></Route>
					<Route  path={'user'} component={User}></Route>
				</Switch>
			</div>
		)
	}
	render(){
		return (
			<div className="AppIndex">
				<TabBar
					unselectedTintColor="#949494"
					tintColor="rgb(41, 179, 49)"
					barTintColor="white"
				>
					<TabBar.Item
						title="首页"
						key='home'
						dot={false}
						selected={this.state.selectTab === 'Home'}
						onPress={this.selectPage.bind(this,'Home')}
						icon={<i className="fa fa-home icon_item"/>
						}
						selectedIcon={<i className="fa fa-home icon_item"/>
						}
					>
					
                    <div className="box">
							<Switch>
								<Switch>
									<Route path={'/index/home'} component={Home}></Route>
									<Route path={'/index/edit'} component={Edit}></Route>
									<Route path={'/index/message'} component={Message}></Route>
									<Route path={'/index/user'} component={User}></Route>
								</Switch>
							</Switch>
						</div>
					{/* view */}
					</TabBar.Item>
						<TabBar.Item
							dot={false}
						    selected={this.state.selectTab === 'Edit'}
							title="发表"
							key='Edit'
						    onPress={this.selectPage.bind(this, 'Edit')}
							icon={<i className="fa fa-send icon_item"/>
							}
							selectedIcon={<i className="fa fa-send icon_item"/>
							}
						>
					
						<div className="box">
							<Switch>
								<Route path={'/index/home'} component={Home}></Route>
								<Route path={'/index/edit'} component={Edit}></Route>
								<Route path={'/index/message'} component={Message}></Route>
								<Route path={'/index/user'} component={User}></Route>
							</Switch>
						</div>
					{/* view */}
						</TabBar.Item>
						<TabBar.Item
							dot={false}
							title="消息"
							key='Message'
						    selected={this.state.selectTab === 'Message'}
						    onPress={this.selectPage.bind(this, 'Message')}
							icon={<i className="fa fa-envelope-o icon_item"/>
							}
							selectedIcon={<i className="fa icon_item fa-envelope-o" />
							}

						>
						
						<div className="box">
							<Switch>
								<Route path={'/index/home'} component={Home}></Route>
								<Route path={'/index/edit'} component={Edit}></Route>
								<Route path={'/index/message'} component={Message}></Route>
								<Route path={'/index/user'} component={User}></Route>
							</Switch>
						</div>
						{/* view */}
						</TabBar.Item>
						<TabBar.Item
							dot={false}
							title="我的"
							key='User'
						    selected={this.state.selectTab === 'User'}
						    onPress={this.selectPage.bind(this, 'User')}
							icon={<i className="fa icon_item fa-user-circle-o"/>
							}
							selectedIcon={<i className="fa icon_item fa-user-circle-o" 
							/>
							}

						>
					
						<div className="box">
							<Switch>
								<Route  path={'/index/home'} component={Home}></Route>
								<Route  path={'/index/edit'} component={Edit}></Route>
								<Route  path={'/index/message'} component={Message}></Route>
								<Route  path={'/index/user'} component={User}></Route>
							</Switch>
						</div>
					{/* view */}
						</TabBar.Item>
				</TabBar>
			</div>
		)
	}
	componentDidMount() {
		console.log(this.props.history)
		
	}
}

export default AppIndex
