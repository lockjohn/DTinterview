import React from "react";
import { withRouter } from 'react-router-dom';

class EmployeeShowDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.Id,
    };
    this.getEmployee = this.getEmployee.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.forceHandler = this.forceHandler.bind(this);
  }

  componentDidMount () {
    this.props.requestEmployee(this.props.match.params.Id)    
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
          this.setState({location: nextProps.location})
      }
  }

  forceHandler () {
    this.forceUpdate();
  }

  getEmployee (array) {
    // this.props.requestEmployee(this.state.id)
          for (let i = 0; i < array.length; i++) {
              if (array[i].id === this.state.id) return i
          }
  }
   
  handleKey (e) {
        let newId;
        const id  = this.props.employees[0].id 
      switch (e.key) {
          case "ArrowDown":
            console.log('props', this.props.location)
            newId = id - 1
            if (newId > 0 ) {
            this.setState({id: newId})
                this.forceHandler();
              this.props.history.push(`/${newId}`);
            }
              break;
          case "ArrowUp":
              newId = id + 1
              if (newId > 0) {
                  this.props.history.push(`/${newId}`);
                  this.setState({ id: newId })
              }
              break;
          case "Enter":
              this.props.history.push(`/`)
              break;
          default:
              break;
      }
  }


  render() {
      
    const {employees} = this.props;

    if (this.props.employees !== undefined && this.props.employees.length > 0) {
    return (
      <div
            tabIndex="0" 
            className=""
            onKeyDown={this.handleKey}>
        <p>Id: {employees[0].id}</p>
        <p>Name: {employees[0].name} </p>
        <p>Title: {employees[0].job_titles}</p>
        <p>Department: {employees[0].department}</p>
            <p>Salary: {employees[0].employee_annual_salary}</p>
      </div>
    );} else {
          return (<div> loading...</div>);
    }
  }
}

export default withRouter(EmployeeShowDetail);
