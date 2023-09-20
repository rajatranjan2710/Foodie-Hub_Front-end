import { createReducer } from "@reduxjs/toolkit"



export const getAllOrdersReducer = createReducer(
    {
        loading: null,
        allOrders: [],
        error: null
    },
    {
        getAllOrdersRequest: (state) => {
            state.loading = true
        },
        getAllOrdersSuccess: (state, action) => {
            state.loading = false
            state.allOrders = action.payload
        },
        getAllOrdersFail: (state, action) => {
            state.loading = true
            state.error = action.payload
        }
    }
)

export const processReducer = createReducer(
    {
        message: null,
        load: null,
        error : null,
    },
    {
        ProcessOrderRequest:(state)=>{
            state.load = true
        },
        ProcessOrderSuccess:(state,action)=>{
            state.load = false
            state.message = action.payload
        },
        ProcessOrderFail:(state,action)=>{
            state.load = true
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