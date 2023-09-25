import React from "react";
import { configureStore } from "@reduxjs/toolkit";
var employeReducer;

const store = configureStore({
    reducer:{
        employe: employeReducer
    }
})

export default store