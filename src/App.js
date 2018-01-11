import React, { Component } from 'react';
// import { Button } from 'antd-mobile';
import {Route,Switch} from 'react-router-dom'
//首页
import AppIndex from './view/AppIndex/AppIndex'
class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path={'/'} component={AppIndex}></Route>
            <Route exact path={'/index'} component={AppIndex}></Route>
          </Switch>
      </div>
    );
  }
  
}

export default App;
