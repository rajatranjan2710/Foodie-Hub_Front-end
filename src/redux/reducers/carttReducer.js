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
    // increment: (state, action) => {
    //     const id = action.payload
    //     state.cartArray.find(i => {
    //         if (i.id === id) {

    //             i.qty += 1
    //             return i.qty
    //         }
    //     })
    // },
    increment: (state, action) => {
        const id = action.payload
        const itemToUpdate = state.cartArray.find(i => i.id===id)
            if(itemToUpdate){
                itemToUpdate.qty +=1
            }
    },
    decrement: (state, action) => {
        const id = action.payload
        const itemToUpdate = state.cartArray.find(i => i.id ===id)

        if(itemToUpdate && itemToUpdate.qty>0){
            itemToUpdate.qty -=1
        }
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
    {
        loading:null
    },
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







