import axios from "axios";
import { server } from "../store";
// import { useDispatch } from "react-redux";

export const loadUser = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"loadUserRequest",
        });
        
        const {data} = await axios.get(`${server}/me`,{
            withCredentials:true
        })
        // console.log(data)

        dispatch({
            type:"loadUserSuccess",
            payload: data.user,
            
        });
    } catch (error) {
        dispatch({
            type:"loadUserFail",
            payload: error.response.data.message
        })
        
    }
}
export const logout = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"logoutUserRequest",
        });
        
         const {data} = await axios.get(`${server}/logout`,{
            withCredentials:true
        })
        // console.log(data)

        dispatch({
            type:"logoutUserSuccess",
            payload: data.message
        });
    } catch (error) {
        dispatch({
            type:"logoutUserFail",
            payload: error.response.data.message
        })
        
    }
}