import { connect } from 'react-redux';
import EmployeeShowDetail from './EmployeeShowDetail';
import { requestEmployee, requestEmployeesList } from '../Actions/employee_actions';
import {withRouter} from 'react-router-dom';


const msp = (state, ownProps) => {
    console.log(ownProps)
    return {
        employees: state.employees,
        location: ownProps.location
    }
}

const mdp = (dispatch) => {
    return { 
        requestEmployee: id => dispatch(requestEmployee(id)), 
        requestEmployeesList: perPage => dispatch(requestEmployeesList(perPage)) 
    };
}

export default withRouter(connect(msp, mdp)(EmployeeShowDetail));
