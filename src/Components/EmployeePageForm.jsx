import React from 'react';


class EmployeePageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "",
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSubmit = this.handlePageSubmit.bind(this);
    }


    handlePageChange(event) {
        this.setState({ page: event.target.value });
    }

    handlePageSubmit(event) {
        event.preventDefault();
        if (this.state.page > 0 && this.state.page < 322) {
            this.props.requestEmployeesPage(this.state.page);
        } else {
            alert("The range of pages is 1 - 321");
        }
    }
    render() {
        return (<form onSubmit={this.handlePageSubmit}>
            <label>
                Navigate to a page:
            <input
                    type="text"
                    value={this.state.page}
                    onChange={this.handlePageChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>)
    }
}

export default EmployeePageForm;