import {
  RECEIVE_EMPLOYEES_LIST,
  RECEIVE_EMPLOYEE_PAGE,
  
} from "../Actions/employee_actions";

const EmployeesReducer = (state = [], action ) => {

    switch (action.type) {
        case RECEIVE_EMPLOYEES_LIST:
        //overwriting slice of state each time
            return action.employees
        case RECEIVE_EMPLOYEE_PAGE:
            return action.employees
        default:
            return state;
    }
}

export default EmployeesReducer;