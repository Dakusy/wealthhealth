import React from "react";
import { Link } from "react-router-dom";

import Table from "../components/tableEmployee";
import '../css/Table.css';


const Employee = () => {
    return (
        <div className="employee_container">
            <h1>Current Employees</h1>
            <Link to='/'>Home</Link>
            <Table />
        </div>
    )
}

export default Employee