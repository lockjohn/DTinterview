import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import getDepartmentEmployees from '../Reducers/selectors';
import { requestEmployeesList, requestEmployeesPage } from '../Actions/employee_actions';
import { changeFilter, clearFilter } from '../Actions/filter_action';

const msp = (state) => {
    return {
        employees: getDepartmentEmployees(state),
        filter: state.filter
    }
}

const mdp = (dispatch) => {
    return {
      requestEmployeesList: perPage => dispatch(requestEmployeesList(perPage)),
      requestEmployeesPage: page => dispatch(requestEmployeesPage(page)),
      changeFilter: department => dispatch(changeFilter(department)),
      clearFilter: () => dispatch(clearFilter())
    }
}

export default connect(msp,mdp)(EmployeeList);
