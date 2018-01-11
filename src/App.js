import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import AppIndex from './view/AppIndex/AppIndex'
class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path={'/'} component={AppIndex}></Route>
            <Route  path={'/index'} component={AppIndex}></Route>
          </Switch>
      </div>
    );
  }
  
}

export default App;
