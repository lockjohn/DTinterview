import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import { requestEmployeesPage } from "../Actions/employee_actions";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      recordsNumber: ""
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestEmployeesList();
  }
  //page number form handlers
  handlePageChange(event) {
    this.setState({ page: event.target.value });
  }

  handlePageSubmit(event) {
    event.preventDefault();
    if (this.state.page > 0 && this.state.page < 322) {
      this.props.requestEmployeesPage(this.state.page);
    } else {
      alert("The range of pages is 1 - 321");
    }
  }
  //number of records form handlers
  handleNumberChange(event) {
    this.setState({ recordsNumber: event.target.value });
  }

  handleNumberSubmit(event) {
    event.preventDefault();
    if (this.state.recordsNumber > 0 && this.state.recordsNumber < 32064) {
      this.props.requestEmployeesList(this.state.recordsNumber);
    } else {
      alert("The range of pages is 1 - 35,000");
    }
  }

  render() {
    const { employees } = this.props;

    if (!employees) {
      return <div> loading...</div>;
    }

    return (
      <div>
        {/* page number search form */}
        <form onSubmit={this.handlePageSubmit}>
          <label>
            Navigate to a page:
            <input
              type="text"
              value={this.state.page}
              onChange={this.handlePageChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* number of records change form */}
        <form onSubmit={this.handleNumberSubmit}>
          <label>
            Change the number of records displayed:
            <input
              type="text"
              value={this.state.recordsNumber}
              onChange={this.handleNumberChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* filter by selection */}
        <form onSubmit={this.handleSelectionSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {employees.map(employee => (
            
                <EmployeeListItem key={employee.id}//use id for key for each item
                name={employee.name}
                title={employee.job_titles}
              />
            
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
