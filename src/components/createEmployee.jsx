import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    employee: [{
        firstname: "Jessy",
        lastname:"Cappelle",
        date: '2023-08-08',
        departement:'Sales',
        birth: '1999-09-09',
        street:'Hollywood',
        city: 'Manhatthan',
        state:'New York',
        code:'20459'
    }
    ]
}

const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers:{
        addEmployee:(state,action) => {
            state.employee.push({...action.payload})
        }
    }
})

export const {addEmploye} = employeSlice.actions
export default employeSlice.reducer