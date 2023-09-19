import axios from "axios"
import { server } from "../store"


export const getAdminOrderById = (id) => async(dispatch)=>{

    try {
        
        dispatch({
            type:"ProcessOrderRequest"
        })
        console.log("Fetching Data")
        const {data} = await axios.get(`${server}/admin/orders/${id}`,{withCredentials:true})
        console.log("Data Fetched")

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
        console.log(error.response.data.message)
        // console.log("Error while Fetching Data")
    }
}