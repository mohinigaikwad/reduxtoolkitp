import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const  allstatus = Object.freeze({
    RESULT:"SUCCESS",
    ERROR:"error",
    LOADING:"loading"
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:allstatus.SUCCESS,
    },

    reducers:{
        setproduct(state,action){
            state.data = action.payload
        },
        setstatus(state,action){
            state.status = action.payload
        }

    }

})

export const {setproduct,setstatus} = productSlice.actions
export default productSlice.reducer

// midleware
// 

export  function getapidata () {
  return async function getapidataThunk(dispatch){
    dispatch(setstatus(allstatus.LOADING))
    try {
        const {data} = await axios.get("https://fakestoreapi.com/products")
        console.log(data);
        dispatch(setproduct(data))
        dispatch(setstatus(allstatus.RESULT))

        
    } catch (error) {
        console.log('====================================');
        console.log(error);
        dispatch(setstatus(allstatus.error))
    }
  }
}

