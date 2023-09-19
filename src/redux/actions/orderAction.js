import axios from "axios";
import { server } from "../store";
import toast from "react-hot-toast";

export const createOrder = (

    shipping_Info,
    orderItems,
    payment_Method,
    items_Price,
    shipping_Charges,
    tax,
    total_Amount,

) => async (dispatch) => {
    try {
        dispatch({
            type: "createOrderRequest",
        });

        const { data } = await axios.post(`${server}/createorder`, {
            shipping_Info,
            orderItems,
            payment_Method,
            items_Price,
            shipping_Charges,
            tax,
            total_Amount,
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })

        dispatch({
            type: "createOrderSuccess",
            payload: data.user,
            

        });
        // console.log("Order Created")
        toast.success("Order Placed")
    } catch (error) {
        dispatch({
            type: "createOrderFail",
            payload: error.response.data.message
        })
        // console.log("Order failed")
        toast.error("Order Failed")

    }
}