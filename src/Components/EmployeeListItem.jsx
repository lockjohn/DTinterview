import React from "react";

function EmployeeListItem (props) {
    return (
        <div className="employee-list-item">
            <p>name: {props.name} title: {props.title}</p>
        </div>
        );
}

export default EmployeeListItem;
