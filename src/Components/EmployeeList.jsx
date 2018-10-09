import React from "react";
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            recordsNumber: null
        };
    }
    
    componentDidMount() {
        this.props.requestEmployeesList();
    }

    render () {
        const { employees } = this.props;

        if (!employees) { return  <div> loading...</div> }

        return ( 
        <div>
            <form action="">
            </form>
            <ul>
                {employees.map(employee => <li key={employee.id}>
                    <EmployeeListItem //use id for key for each item
                    
                    name={employee.name} 
                    title={employee.job_titles} />
                </li>)}
            </ul>
            </div>);
    }
}

export default EmployeeList;