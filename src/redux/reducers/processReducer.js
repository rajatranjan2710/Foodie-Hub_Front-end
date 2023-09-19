import { createReducer } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const processReducer = createReducer(
    {
        message: null,
        loading: null,
        error : null,
    },
    {
        ProcessOrderRequest:(state)=>{
            state.loading = true
        },
        ProcessOrderSuccess:(state,action)=>{
            state.loading = false
            state.message = action.payload
        },
        ProcessOrderRequest:(state,action)=>{
            state.loading = true
            state.error = action.payload
        },
        clearMessage:(state)=>{
            state.message = null
        },
        clearError:(state)=>{
            state.error = null
        }
    }
)