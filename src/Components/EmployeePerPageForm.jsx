import React from 'react';


class EmployeePerPageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordsNumber: "",
        }

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
    }

    handleNumberChange(event) {
        this.setState({ recordsNumber: event.target.value });
    }

    handleNumberSubmit(event) {
        event.preventDefault();
        if (this.state.recordsNumber > 0 && this.state.recordsNumber < 32064) {
            this.props.requestEmployeesList(this.state.recordsNumber);
        } else {
            alert("The range of pages is 1 - 35,000");
        }
    }
    render() {
        return(<form onSubmit={this.handleNumberSubmit}>
            <label>
                Change the number of records displayed:
            <input
                    type="text"
                    value={this.state.recordsNumber}
                    onChange={this.handleNumberChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>)
    }
}

export default EmployeePerPageForm;