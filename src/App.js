import React, { Component } from 'react';
import './App.css';

import EmployeeList from './EmployeeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: null,
    };
  }

  fetchEmployees (number = 25) {
    fetch(`https://dt-interviews.appspot.com/?per_page=${number}`)
    .then( response => {
      return response.json();
    }).then( jsonReponse => {
      this.setState({ employees: jsonReponse })
    });
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Employees
        </header>
          <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
