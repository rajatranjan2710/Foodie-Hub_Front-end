import { createReducer } from "@reduxjs/toolkit";

export const carttReducer = createReducer({
    cartArray: [],
    subTotal: 0,
    tax: 0,
    shippingCharges: 0,
    total: 0,
    shippingInfo: {}
}, {

    addToCart: (state, action) => {
        const item = action.payload
        // console.log("item recieved")
        const isItemExist = state.cartArray.find((i) => i.id === item.id)
        if (isItemExist) {
            // console.log("item exist")
            state.cartArray.forEach((i) => {
                if (i.id === item.id)
                    i.qty += 1
            })
        }
        else {

            // console.log("item pushed")
            state.cartArray.push(item)
        }
    },
    total: (state) => {
        let sum = 0
        state.cartArray.forEach(i => sum = sum + i.price * i.qty)
        state.subTotal = sum
        state.tax = state.subTotal * 0.09
        state.shippingCharges = state.subTotal > 1000 ? 150 : 0
        state.total = state.subTotal + state.tax + state.shippingCharges
    },
    increment: (state, action) => {
        const id = action.payload
        state.cartArray.find(i => {
            if (i.id === id) {

                i.qty += 1
            }
        })
    },
    decrement: (state, action) => {
        const id = action.payload
        state.cartArray.find(i => {
            if (i.id === id) {
                if (i.qty > 0) {

                    i.qty -= 1
                }
            }

        })
    },
    clearCart: (state) => {
        // console.log("cart cleared")
        state.cartArray = []
        state.subTotal = 0;
        state.tax = 0;
        state.shippingCharges = 0;
        state.total = 0;
    },

    addShippingInfo: (state, action) => {
        state.shippingInfo = {
            hNo: action.payload.hNo,
            city: action.payload.city,
            state: action.payload.stte,
            country: action.payload.country,
            pinCode: action.payload.pinCode,
            phoneNo: action.payload.phoneNo,
        }
        // console.log("shipping details recieved")
        // console.log(state.shippingDetails)
    }

})


export const orderReducer = createReducer(
    {},
    {
        createOrderRequest: (state) => {
            state.loading = true
        },
        createOrderSuccess: (state, action) => {
            state.loading = false
            state.message = action.payload
        },
        createOrderFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        clearMessage: (state) => {
            state.message = null
        },
        clearError: (state) => {
            state.error = null
        },
    })


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


export const getAllOrders = createReducer(
    {
        loading: true,
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
        getAllOrdersRequest: (state, action) => {
            state.loading = true
            state.error = action.payload
        }
    }
)


