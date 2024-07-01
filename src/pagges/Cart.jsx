import React from 'react'
import {  useSelector,useDispatch} from "react-redux";
import  './cart.css';
import { removefromcart } from '../Redux/CartSlice';

export default function Cart() {
  const cartitem = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleremove = (id)=>{
    console.log('====================================');
    console.log("clik");
    console.log('====================================');
    dispatch(removefromcart(id))

  }
  return (
    <div>
      <h1> cart</h1>
       <div className="cartwrap">
        {
          cartitem.map((item)=>{
            const {image,price,title,id} = item
            return(
              <div className="cartcard">
                <img className='cartimge' src={image} alt="" />
                <h5>{title}</h5>
                <h5>{price}</h5>
                <button className='btn btn-danger' onClick={()=>handleremove(id)}>Remove</button>
              </div>
            )
            

})
        }
       </div>
    </div>
  )
}
