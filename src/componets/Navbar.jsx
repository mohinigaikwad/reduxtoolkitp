import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state)=>state.cart)
  // items hold all data given by cart state
  // 
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div className="logo">
            <h1>ReduxToolKit Project</h1>
        </div>
        <div>
            <Link to={"/"}className='navlink ' style={{fontWeight:"bolder",textDecoration:"none",color:"black"}}>Home</Link>
            <Link to={"/cart"}className='navlink' style={{fontWeight:"bolder",marginRight:"8px",marginLeft:"7px",textDecoration:"none",color:"black"}}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>Item:{items.length}</span>
        </div>
    </div>
  )
}
