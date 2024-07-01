import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { addtocart } from "../Redux/CartSlice";
import "./home.css"
import { allstatus, getapidata } from '../Redux/ProductSlice';




export default function Home() {

    const {data:product,status} = useSelector((state)=>state.product)
    const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getapidata())
   },[])

   const handleadddata = (item)=>{
    dispatch(addtocart(item))
   }

   if (status === allstatus.loading ) {
    return <h2>Loading</h2>
   }
    
  return (
    <div className='productrap'>
        {product.map((item)=>(
 <div className="card">
           <img className='pimg' src={item.image} alt="" />
             <h4>{item.title}</h4>
             <h4>{item.price}</h4>
             <button className='addb btn btn-warning' onClick={()=>handleadddata(item)}>Add to cart</button>
          </div>
           
        ))
           
            
        }
    </div>
  )
}
