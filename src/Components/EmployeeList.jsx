import React from "react";
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends React.Component {
 
    render () {
        const { employees } = this.props;

        if (!employees) { return  <div> loading...</div> }

        return ( <ul>
            {employees.map(employee => <li key={employee.id}>
                <EmployeeListItem //use id for key for each item
                 
                  name={employee.name} 
                  title={employee.job_titles} />
              </li>)}
        </ul>);
    }
}

export default EmployeeList;