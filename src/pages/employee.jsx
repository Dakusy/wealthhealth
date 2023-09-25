import React from "react";
import { Link } from "react-router-dom";


const Employee = () => {
    return (
        <div className="employee_container">
            <h1>Current Employees</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Employee