import React from "react";
import Modal from 'react-modal';
import EmployeeFilter from './EmployeeFilter';
import EmployeePerPageForm from './EmployeePerPageForm';
import EmployeePageForm from './EmployeePageForm';


Modal.setAppElement('#root');

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: null,
      idx: null,
    };
    this.fx = (e) => this.modalKeyFx(e);
    this.setRow = this.setRow.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAfterOpenFunc = this.handleAfterOpenFunc.bind(this);
    this.modalKeyFx = this.modalKeyFx.bind(this);
  }

  setRow(row) {
    this.setState({ row });
  }

  setIndex(idx) {
    this.setState({ idx });
  }

  setBoth(row, idx) {
    this.setRow(row);
    this.setIndex(idx)
  }

  componentDidMount() {
    this.props.requestEmployeesList();
  }

  //setting keyboard controllable focus for list elements---------------------------------
  //-------------------------------------------------------------

  handleFocus(e) {
    const element = e.target;
    element.addEventListener("keydown", e => this.keyFunction(e));
  }

  keyFunction(event) {
    const el = event.target; // == li from the list of employees
  
    switch (event.key) {
      case "ArrowDown":
        if (el.nextSibling != null) {
          el.nextSibling.focus();
        }
        break;
      case "ArrowUp":
        if (el.previousSibling != null) {
          el.previousSibling.focus();
        }
        break;
      case "Enter":
        const worker = this.props.employees[parseInt(el.dataset.idx)]
        this.setRow(worker);
        this.setIndex(parseInt(el.dataset.idx));
        // el.removeEventListener("keydown", e => this.keyFunction(e), true)
        break;
      default:
        break;
    }
  }
  

  handleAfterOpenFunc() {
   const modal = document.getElementsByTagName("body").item(0).lastChild.previousSibling;
    modal.addEventListener("keydown", this.fx, false);//problem
  }

  handleCloseModal() {

    const modal = document.getElementsByTagName("body").item(0).lastChild.previousSibling;
    modal.removeEventListener("keydown", this.fx, false);
    this.setState({ row: null })
    document.querySelector(`[data-idx='${this.state.idx}']`).focus();
  }


  modalKeyFx(event) {
    event.stopPropagation();
    let worker;
    const { idx } = this.state;
    const array = this.props.employees
    switch (event.key) {
      case "ArrowDown":
        worker = array[idx + 1]
        this.setRow(worker);
        this.setIndex(idx + 1);
        break;
      case "ArrowUp":
        worker = array[idx - 1]
        this.setRow(worker);
        this.setIndex(idx - 1);
        break;
      case "Enter":
        this.handleCloseModal();
        this.setIndex({ idx: null })
        break;
      default:
        break;
    }
  }

  render() {
    const { employees } = this.props;
    const { row } = this.state;
    let modaldiv;

    if (!employees) {
      return <div> loading...</div>;
    }

    if (row != null) {
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
        <EmployeePageForm requestEmployeesPage={this.props.requestEmployeesPage} />
        <EmployeePerPageForm requestEmployeesList={this.props.requestEmployeesList} />
        <EmployeeFilter changeFilter={this.props.changeFilter} clearFilter={this.props.clearFilter} />

        <ul id="list" tabIndex="0" autoFocus>
          {employees.map((employee, idx) => (<li
            tabIndex="-1"
            data-idx={idx}
            key={employee.id}
            id={employee.id}
            onFocus={e => this.handleFocus(e)}>
            <div className="employee-list-item">
              <span><p
                onClick={() => {
                  this.setRow(employee);
                  this.setIndex(idx);
                }}
              >name: {employee.name}</p><p> title: {employee.job_titles}</p></span>
            </div>
          </li>))}
        </ul>

        <Modal
          isOpen={this.state.row != null}
          onRequestClose={this.handleCloseModal}
          onAfterOpen={this.handleAfterOpenFunc}
          style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.32)', },
            content: {
              margin: '0.5rem',
              padding: '1rem',
              outline: 'none',
              overflow: 'auto',
              backgroundColor: 'white',
              boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.24), 0 16px 40px 0 rgba(0, 0, 0, 0.32)',
            }
          }}>
          {modaldiv}
        </Modal>
      </div>
    );
  }
}

export default EmployeeList;
