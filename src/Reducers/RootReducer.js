import EmployeesReducer from './EmployeesReducer';
import FilterReducer from './FilterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    employees: EmployeesReducer,
    selectedFilter: FilterReducer,
});

export default rootReducer;
