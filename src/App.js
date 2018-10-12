import React from 'react';
import Modal from 'react-modal';
import './App.css';
import { createNewEmployee } from './APIUtil';


import EmployeeListContainer from './Components/EmployeeListContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
        name: '',
        job_titles: '',
        department: '',
        employee_annual_salary: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    createNewEmployee({
      name: this.state.name,
      job_titles: this.state.job_titles,
      department: this.state.department,
      employee_annual_salary: this.state.employee_annual_salary,
    });
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
          <form >
            <label>Name
          <input type="text" onChange={this.update('name')} value={this.state.name} />
            </label>
            <label>Title
          <input type="text" onChange={this.update('job_titles')} value={this.state.job_titles} />
            </label>
            <label>Department
          <input type="text" onChange={this.update('department')} value={this.state.department} />
            </label>
            <label>Salary
          <input type="text" onChange={this.update('employee_annual_salary')} value={this.state.employee_annual_salary} />
            </label>

            <button onClick={this.handleSubmit}>Create New Employee</button>
          </form>
        </Modal>
      </div>);
  }
}




export default App;
