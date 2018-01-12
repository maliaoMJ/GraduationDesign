import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import AppIndex from './view/AppIndex/AppIndex'
import Detail from './view/Detail/Detail'
class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path={'/'} component={AppIndex}></Route>
            <Route  path={'/index'} component={AppIndex}></Route>
          <Route exact path={'/detail/:id'} component={Detail}></Route>
          </Switch>
      </div>
    );
  }
  
}

export default App;
