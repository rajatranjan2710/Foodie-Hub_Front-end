import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer({
    user:{}
},{

    loadUserRequest:(state)=>{
        state.loading = true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loadUserFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
        // console.log(state.error)
    },
    clearError:(state)=>{
        state.error=null
    },
    clearMessage:(state)=>{
        state.message=null
    },
    logoutUserRequest:(state)=>{
        state.loading = true;
    },
    logoutUserSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutUserFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
        // console.log(state.error)
    }
})