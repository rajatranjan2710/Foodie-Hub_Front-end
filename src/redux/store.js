import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { carttReducer, getAllOrders, getOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/carttReducer";
import { processReducer } from "./reducers/processReducer";
import { adminReducer } from "./reducers/adminStats";

const store = configureStore({
    reducer:{
        auth:authReducer,
        cartt:carttReducer,
        order: orderReducer,
        details:orderDetailsReducer,
        getOrder:getOrderReducer,
        getAllOrders : getAllOrders,
        processOrder : processReducer,
        adminStats : adminReducer
    },
});

export default store;

export const server = "https://backend-phi-virid.vercel.app/api/v1";