import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { carttReducer,  orderReducer } from "./reducers/carttReducer";

import { getAllOrdersReducer,processReducer} from "./reducers/adminOrdersReducer";

import { adminStatsReducer, adminUserReducer } from "./reducers/adminStatsReducer";
import { getOrderReducer, orderDetailsReducer } from "./reducers/orderDetailsReducer";

const store = configureStore({
    reducer:{
        auth:authReducer,
        cartt:carttReducer,
        order: orderReducer,
        details:orderDetailsReducer,
        getOrder:getOrderReducer,
        getAllOrders : getAllOrdersReducer,
        processOrder : processReducer,
        adminStats : adminStatsReducer,
        getUsers : adminUserReducer
    },
});

export default store;

export const server = "https://backend-phi-virid.vercel.app/api/v1";