import * as APIUtil from '../APIUtil';

export const RECEIVE_EMPLOYEES_LIST = 'RECEIVE_EMPLOYEES_LIST'
export const RECEIVE_EMPLOYEE_PAGE = 'RECEIVE_EMPLOYEE_PAGE'
export const RECEIVE_EMPLOYEE = 'RECEIVE_EMPLOYEE'
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE'

//action creators

export const receiveEmployeesList = employees => {
    return ({
        type: RECEIVE_EMPLOYEES_LIST,
        employees
    })
}

export const receiveEmployeesPage = employees => {
    return ({
        type: RECEIVE_EMPLOYEES_PAGE,
        employees
    })
}

export const receiveEmployee = employee => {
    return ({
        type: RECEIVE_EMPLOYEE,
        employee
    })
}

//actions

export const requestEmployeesList = perPage => dispatch => {
    return APIUtil.fetchEmployeesByPerPage(perPage).then(list => {
        dispatch(receiveEmployeesList(list));
    });
}

export const requestEmployeesPage = page => dispatch => {
    return APIUtil.fetchEmployeesByPage(id).then( list => {
        dispatch(receiveEmployeesPage(list));
    });
}

export const createEmployee = employee => dispatch => {
    APIUtil.createNewEmployee(employee).then(employee => {
        dispatch(receiveEmployee(employee));
        return employee;
    });
}

