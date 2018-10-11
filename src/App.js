import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import EmployeeListContainer from './Components/EmployeeListContainer';
import EmployeeShowContainer from './Components/EmployeeShowContainer';

class App extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">Employees</header>
        <Switch>
          <Route exact path="/:Id" component={EmployeeShowContainer} />
          <Route path="/" component={EmployeeListContainer} />
        </Switch>
        
    </div>);
  }
}

export default withRouter(App);
