import { createReducer } from "@reduxjs/toolkit";

export const adminStatsReducer = createReducer(
    {
        loading:true,
        userCount:0,
        error:null,
        totalOrders:0,
        preparing:0,
        shipped:0,
        delivered:0,
        totalIncome:0
    },
    {
        adminStatsRequest:(state)=>{
            state.loading = true
        },
        adminStatsSuccess:(state,action)=>{
            state.loading = false
            state.userCount = action.payload.userCount
            state.totalOrders = action.payload.ordersCount.total
            state.preparing = action.payload.ordersCount.preparing
            state.shipped = action.payload.ordersCount.shipped
            state.delivered = action.payload.ordersCount.delivered
            state.totalIncome = action.payload.totalIncome
        },
        adminStatsFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
    }
)


export const adminUserReducer = createReducer({

    userArray : [],
    error :null,
    loading: null
},{
    getUserRequest:(state)=>{
        state.loading= true
    },
    getUserSuccess:(state,action)=>{
        state.loading= false
        state.userArray = action.payload
    },
    getUserFail:(state,action)=>{
        state.loading= true
        state.error = action.payload
    },
})

