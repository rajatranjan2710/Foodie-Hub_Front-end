import axios from "axios"
import { server } from "../store"


export const processOrder = (id) => async(dispatch)=>{

    try {
        
        dispatch({
            type:"ProcessOrderRequest"
        })
        // console.log("Fetching Data")
        const {data} = await axios.get(`${server}/admin/orders/${id}`,{withCredentials:true})
        // console.log("Data Fetched")

        console.log(data)
        dispatch({
            type:"ProcessOrderSuccess",
            payload:data.message
        })


    } catch (error) {
        dispatch({
            type:"ProcessOrderFailed",
            payload:error.response.data.message

        })
        // console.log(error.response.data.message)
        // console.log("Error while Fetching Data")
    }
}

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