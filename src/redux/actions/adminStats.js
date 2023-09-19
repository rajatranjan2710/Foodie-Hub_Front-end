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