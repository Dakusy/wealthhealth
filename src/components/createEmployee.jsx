import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    employee: [{
        firstName: "Jessy",
        lastName:"Cappelle",
        date: '2023-08-08',
        departement:'Sales',
        birth: '1999-09-09',
        street:'Hollywood',
        city: 'Manhatthan',
        state:'New York',
        zipCode:'20459'
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

export const {addEmployee} = employeeSlice.actions
export default employeeSlice.reducer