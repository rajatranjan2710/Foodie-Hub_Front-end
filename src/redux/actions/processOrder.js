//admin order

import axios from "axios"
import { server } from "../store"


export const getOrdersAll = () => async(dispatch)=>{

    try {
        dispatch({
            type:"getAllOrdersRequest"
        })

        // console.log("fetching all orders")
        const {data} = await axios.get(`${server}/admin/orders`,{withCredentials:true})
        // console.log(data.order)
        // console.log("data fetched")

        dispatch({
            type:"getAllOrdersSuccess",
            payload: data.order
        })

        

    } catch (error) {
        dispatch({
            type:"getAllOrdersFail",
            payload: error.message
        })
        // console.log("error while fecthing"+error)
    }
}