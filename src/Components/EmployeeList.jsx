import React from "react";
import EmployeeListItem from "./EmployeeListItem";



class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      recordsNumber: "",
      value: this.props.filter,
    };

    //this binders for handle fx
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectSubmit = this.handleSelectSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestEmployeesList();
  }
  //page number form handlers-------------------------------------------------------
  //-------------------------------------------------------------

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
  //number of records form handlers-------------------------------------------------------
  //-------------------------------------------------------------

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
  //select dept filter handlers-------------------------------------------------------
  //-------------------------------------------------------------

  handleSelectChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSelectSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    this.state.value === "none"
      ? this.props.clearFilter()
      : this.props.changeFilter(this.state.value);
  }

  //setting keyboard controllable focus for list elements---------------------------------
  //-------------------------------------------------------------

  handleClick(e) {
    const list = document.getElementById("list");
    list.firstChild.focus();
  }

  handleFocus(e) {
    const element = e.target;
    element.addEventListener("keydown", e => this.keyFunction(e));
  }

  keyFunction(event) {
    const el = event.target;

    switch (event.key) {
      case "ArrowDown":
        el.nextSibling.focus();
        break;
      case "ArrowUp":
        el.previousSibling.focus();
        break;
      case "Enter":
        this.props.history.push(`/${el.dataset.id}`)
        break;
      default:
        break;
    }
  }

  //render-------------------------------------------------------
  //-------------------------------------------------------------

  render() {
    const { employees } = this.props;
    const departments = [
      "POLICE",
      "GENERAL SERVICES",
      "WATER MGMNT",
      "OEMC",
      "CITY COUNCIL",
      "AVIATION",
      "STREETS & SAN",
      "FIRE",
      "FAMILY & SUPPORT",
      "PUBLIC LIBRARY",
      "TRANSPORTN",
      "MAYOR'S OFFICE",
      "HEALTH",
      "BUSINESS AFFAIRS",
      "LAW",
      "FINANCE",
      "CULTURAL AFFAIRS",
      "COMMUNITY DEVELOPMENT",
      "PROCUREMENT",
      "BUILDINGS"
    ];

    if (!employees) {
      return <div> loading...</div>;
    }

    return (
      <div>
        {/* page number display form */}
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
        {/* number of records to list form */}
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
        <form onSubmit={this.handleSelectSubmit}>
          <label>
            Filter by Employee Department:
            <select value={this.state.value} onChange={this.handleSelectChange}>
              <option value="none">None</option>
              {departments.map((department, i) => (
                <option key={i} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <ul id="list" tabIndex="0" onClick={e => this.handleClick(e)}>
          {employees.map((employee, idx) => (
            <li
              tabIndex="-1"
              data-id={employee.id}
              key={employee.id}
              onFocus={e => this.handleFocus(e)}
            >
              <EmployeeListItem 
                name={employee.name}
                title={employee.job_titles}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
