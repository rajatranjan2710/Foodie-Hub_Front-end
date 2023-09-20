import { createReducer } from "@reduxjs/toolkit"

export const orderDetailsReducer = createReducer({

    loading: null,
    myOrders: [],
    error: null

}, {

    loadDetailsRequest: (state) => {
        state.loading = true
    },
    loadDetailSuccess: (state, action) => {
        state.loading = false
        state.myOrders = action.payload
    },
    loadDetailsFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    }
})

export const getOrderReducer = createReducer({
    loading: null,
    data: {},
    error: null
}
    , {
        getOrderRequest: (state) => {
            state.loading = true
        },
        getOrderSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        getOrderFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    })
