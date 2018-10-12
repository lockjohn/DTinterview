import React from 'react';


class EmployeeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.filter,
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSelectSubmit = this.handleSelectSubmit.bind(this);
    }
    handleSelectChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSelectSubmit(event) {
        event.preventDefault();
        this.state.value === "none"
            ? this.props.clearFilter()
            : this.props.changeFilter(this.state.value);
    }

    render () {
        const departments = [
            "POLICE",
            "GENERAL SERVICES",
            "WATER MGMNT",
            "OEMC",
            "CITY COUNCIL",
            "AVIATION",
            "STREETS & SAN",
            "FIRE",
            "FAMILY & SUPPORT",
            "PUBLIC LIBRARY",
            "TRANSPORTN",
            "MAYOR'S OFFICE",
            "HEALTH",
            "BUSINESS AFFAIRS",
            "LAW",
            "FINANCE",
            "CULTURAL AFFAIRS",
            "COMMUNITY DEVELOPMENT",
            "PROCUREMENT",
            "BUILDINGS"
        ];
    return( <form onSubmit={this.handleSelectSubmit}>
            <label>
                Filter by Employee Department:
            <select value={this.state.value} onChange={this.handleSelectChange}>
                    <option value="none">None</option>
                    {departments.map((department, i) => (
                        <option key={i} value={department}>
                            {department}
                        </option>
                    ))}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>)
    }

}

export default EmployeeFilter;