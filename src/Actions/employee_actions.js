import * as APIUtil from '../APIUtil';

//action types

export const RECEIVE_EMPLOYEES_LIST = 'RECEIVE_EMPLOYEES_LIST';
export const RECEIVE_EMPLOYEE_PAGE = 'RECEIVE_EMPLOYEE_PAGE';
export const RECEIVE_EMPLOYEE = 'RECEIVE_EMPLOYEE';

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';


//action creators

export const receiveEmployeesList = employees => {
    return ({
        type: RECEIVE_EMPLOYEES_LIST,
        employees
    })
};

export const receiveEmployeesPage = employees => {
    return ({
        type: RECEIVE_EMPLOYEE_PAGE,
        employees
    })
};

export const receiveEmployee = employee => {
    return ({
        type: RECEIVE_EMPLOYEE,
        employee
    })
};



//action dispatch functions

export const requestEmployeesList = perPage => dispatch => {
    return APIUtil.fetchEmployeesByPerPage(perPage).then(list => {
        console.log('got here')
        console.log(receiveEmployeesList(list))
        dispatch(receiveEmployeesList(list));
    });
};

export const requestEmployeesPage = page => dispatch => {
    return APIUtil.fetchEmployeesByPage(page).then( list => {
        dispatch(receiveEmployeesPage(list));
    });
};

export const requestEmployee = id => dispatch => {
    return APIUtil.fetchEmployee(id).then( employee => {
        dispatch(receiveEmployee(employee));
    })
}

export const createEmployee = employee => dispatch => {
    APIUtil.createNewEmployee(employee).then(employee => {
        dispatch(receiveEmployee(employee));
        return employee;
    });
};

