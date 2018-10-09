import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import getDepartmentEmployees from '../Reducers/selectors';
import { requestEmployeesList, requestEmployeesPage } from '../Actions/employee_actions';

const msp = (state) => {
    return {
        employees: getDepartmentEmployees(state),
        filter: state.filter
    }
}

const mdp = (dispatch) => {
    return {
      requestEmployeesList: perPage => dispatch(requestEmployeesList(perPage)),
      requestEmployeesPage: page => dispatch(requestEmployeesPage(page))
    }
}

export default connect(msp,mdp)(EmployeeList);
