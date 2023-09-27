import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from '../components/createEmployee'

const store = configureStore({
    reducer:{
        employee: employeeReducer
    }
})

export default store