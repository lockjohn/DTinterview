import React from 'react';
import Modal from 'react-modal';
import './App.css';
import { createEmployee } from './Actions/employee_actions';

import EmployeeListContainer from './Components/EmployeeListContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      employee: {
        name: '',
        job_titles: '',
        department: '',
        employee_annual_salary: '',
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ employee: { [field]: e.target.value } });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    createEmployee(this.state.employee);
  }

  handleClick(e) {
    let tog;
    this.state.showModal === true ? tog = false : tog = true;
    this.setState({ showModal: tog })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Employees</header>
        <button onClick={this.handleClick}>New Employee Form</button>
        <EmployeeListContainer />
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleClick}
        >
          <form onSubmit={this.handlePageSubmit}>
            <label>Name
          <input type="text" onChange={this.update('name')} value={this.state.employee.name} />
            </label>
            <label>Title
          <input type="text" onChange={this.update('job_titles')} value={this.state.employee.job_titles} />
            </label>
            <label>Department
          <input type="text" onChange={this.update('department')} value={this.state.employee.department} />
            </label>
            <label>Salary
          <input type="text" onChange={this.update('employee_annual_salary')} value={this.state.employee.employee_annual_salary} />
            </label>

            <button>Create New Employee</button>
          </form>
        </Modal>
      </div>);
  }
}

export default App;
