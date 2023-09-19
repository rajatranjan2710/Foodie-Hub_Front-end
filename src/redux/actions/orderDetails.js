import axios from "axios";
import { server } from "../store";
import toast from "react-hot-toast";

export const orderDetails = () => async (dispatch) => {

    try {
        dispatch({
            type: "loadDetailsRequest"
        })
        const { data } = await axios.get(`${server}/myorders`, {
            withCredentials: true
        })
        // console.log(data.orders)

        dispatch({
            type: "loadDetailSuccess",
            payload: data.orders
        })
    } catch (error) {
        dispatch({
            type: "loadDetailsFail",
            payload: error.message
        })
        // console.log("error while fetching data")
    }

}

export const getOrderById = (id) => async (dispatch) => {


    try {
        dispatch({
            type: "getOrderRequest"
        })
        // console.log("fetching")
        const { data } = await axios.get(`${server}/order/${id}`,
            { withCredentials: true })
        // console.log(data.order)
        // console.log("fecthed")

        dispatch({
            type: "getOrderSuccess",
            payload: data.order
        })


    } catch (error) {

        dispatch({
            type: "getOrderFail",
            payload: error.message
        })
        console.log("error while fecthing order id")
    }
}


