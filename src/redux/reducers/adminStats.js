import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
    {
        loading:true,
        response:{},
        error:null
    },
    {
        adminStatsRequest:(state)=>{
            state.loading = true
        },
        adminStatsSuccess:(state,action)=>{
            state.loading = false
            state.response = action.payload
        },
        adminStatsRequest:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
    }
)