import axios from "axios"
import { server } from "../store"



export const adminStats = () => async (dispatch) => {

    try {

        dispatch({
            type: "adminStatsRequest"
        })


        const { data } = await axios.get(`${server}/admin/stats`, { withCredentials: true })
        // console.log(data)

        dispatch({
            type: "adminStatsSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type:"adminStatsFail",
            payload:error.message
        })
        // console.log(error.response.data.message)
    }
}

export const getAllUsers = () => async(dispatch)=>{


    try {

        dispatch({
            type:"getUserRequest"
        })
        const {data} = await axios.get(`${server}/admin/users`,{withCredentials:true})  

        dispatch({
            type:"getUserSuccess",
            payload:data.user
        })

        // console.log(data.user)

    } catch (error) {
        dispatch({
            type:"getUserFail",
            payload:error.response.data.message
        })
        // console.log(error)        
    }

    
}