import React from "react";
import Modal from 'react-modal';


Modal.setAppElement('#root');

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      recordsNumber: "",
      value: this.props.filter,
      row: null,
      idx: null,
    };
    this.setRow = this.setRow.bind(this);
    //this binders for handle fx
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSubmit = this.handlePageSubmit.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectSubmit = this.handleSelectSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAfterOpenFunc = this.handleAfterOpenFunc.bind(this);
    this.modalKeyFx = this.modalKeyFx.bind(this);
  }

  setRow(row) {
    this.setState({ row });
  }

  setIndex(idx) {
    this.setState({idx});
  }

  setBoth(row, idx) {
    this.setRow(row);
    this.setIndex(idx)
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

  handleFocus(e) {
    console.log('li handle focus fired', e)
    const element = e.target;
    element.addEventListener("keydown", e => this.keyFunction(e));
  }

  keyFunction(event) {
    event.stopPropagation();
    const el = event.target; // == li from the list of employees

    switch (event.key) {
      case "ArrowDown":
        if (el.nextSibling != null) {
        el.nextSibling.focus(); 
          el.removeEventListener("keydown", e => this.keyFunction(e))
      }
        break;
      case "ArrowUp":
      if (el.previousSibling != null) {
        el.previousSibling.focus(); 
      }
        break;
      case "Enter":
        const worker =  this.props.employees[parseInt(el.dataset.idx)]
        this.setRow(worker);
        this.setIndex(parseInt(el.dataset.idx));
        break;
      default:
        break;
    }
  }

  handleAfterOpenFunc() {
    const parent = document.getElementsByTagName("body").item(0);
    const modal = parent.lastChild;
    modal.addEventListener("keydown", e => this.modalKeyFx(e), true);
  }

  handleCloseModal() {
    this.setState({ row: null })
    const parent = document.getElementsByTagName("body").item(0);
    const modal = parent.lastChild;
    modal.removeEventListener("keydown", e => this.modalKeyFx(e), true);
  }


  modalKeyFx(event) {
    event.stopPropagation();
    let worker;
    const {idx} = this.state;
    const array = this.props.employees
    switch (event.key) {
      case "ArrowDown":
        worker = array[ idx + 1 ]
        console.log(idx)
        this.setRow(worker);
        this.setIndex(idx + 1);
        console.log(this.state.idx)
        break;
      case "ArrowUp":
        worker = array[idx - 1]
        this.setRow(worker);
        this.setIndex(idx - 1);
        break;
      case "Enter":
        this.handleCloseModal();
        this.setIndex({idx: null})
        break;
      default:
        break;
    }
  }

 getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}


  //render-------------------------------------------------------
  //-------------------------------------------------------------

  render() {
    const { employees } = this.props;
    const { row } = this.state;
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
    let modaldiv;
    
    if (!employees) {
      return <div> loading...</div>;
    }

    if(row != null) {
      modaldiv = <div
        tabIndex="0"
        className=""
        data-id={row.id}>
        <p>Id: {row.id}</p>
        <p>Name: {row.name} </p>
        <p>Title: {row.job_titles}</p>
        <p>Department: {row.department}</p>
        <p>Salary: {row.employee_annual_salary}</p>
      </div>
    } else {
      modaldiv = <div></div>
    }

    return (
      <div id="wrapper">
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
        {/* ul of list         */}
        <ul id="list" tabIndex="0" autoFocus>
          {employees.map((employee, idx) => (
            <li
              // 
              tabIndex="-1"
              data-idx={idx}
              key={employee.id}
              id={employee.id}
              onFocus={e => this.handleFocus(e)}
            >
              <div className="employee-list-item">
                <span><p 
                onClick={() => {
                  this.setRow(employee); 
                  this.setIndex(idx);
                }}
                >name: {employee.name}</p><p> title: {employee.job_titles}</p></span>
              </div>
            </li>
          ))}
        </ul>
          {/* modal when clicked  */}
        <Modal
          // onClick={this.handleCloseModal}
          isOpen={this.state.row != null}
          onRequestClose={this.handleCloseModal}
          onAfterOpen={this.handleAfterOpenFunc}
          style={
            {
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.32)',
              },
              content: {
                margin: '0.5rem',
                padding: '1rem',
                outline: 'none',
                overflow: 'auto',
                backgroundColor: 'white',
                boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.24), 0 16px 40px 0 rgba(0, 0, 0, 0.32)',
              }
            }
          }>
          {modaldiv}
        </Modal>
      </div>
    );
  }
}

export default EmployeeList;
