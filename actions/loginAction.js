import {LOGIN_REQUEST,CLEAR_ERROR,LOGIN_FAILED ,LOGIN_SUCCESS} from "../type";

import Constant from "../Constant";
import axios from "axios";
export const  doLogin=(body)=> async (dispatch) => {
    dispatch({
        type:LOGIN_REQUEST
    })
    try {
        let {data} =await axios.post(`${Constant.baseUrl}${Constant.loginUrl}`,body)
        console.log(data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type:LOGIN_FAILED,
            paylaod: "ERROR"
        })
    }


 }

 export const clearError = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERROR
    })
}