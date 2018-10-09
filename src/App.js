import React, { Component } from 'react';
import './App.css';

import EmployeeListContainer from './Components/EmployeeListContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: null,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Employees
        </header>
          <EmployeeListContainer employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
