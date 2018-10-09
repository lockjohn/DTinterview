import { createSelector } from 'reselect'

const getDepartmentFilter = state => state.filter
const getEmployees = state => state.employees

const getDepartmentEmployees = createSelector(
    [getDepartmentFilter, getEmployees],
    (filter, employees) => {
        switch (filter) {
            case 'SHOW_ALL':
                return employees
            case 'SHOW_SELECTED':
                return employees.filter(worker => worker.department === filter.selected);
            default:
                return employees;
        }
    }
)

export default getDepartmentEmployees;