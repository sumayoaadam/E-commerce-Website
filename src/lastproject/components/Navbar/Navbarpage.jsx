import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import"./Navbarpage.css"
import logo from "../assetes/logo.png";
import cartIon from "../assetes/cart_icon.png";
import { ShopContext } from '../../context/ShopContext';
const Navbarpage = () => {

  const [menu,setmenu]=useState("shop");
  const {getTotalCartItem} = useContext(ShopContext);



  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>SHOPPING</p>
      </div>
     <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}> <Link to="/">Shop</Link> {menu==="shop"? <hr/>:<></>} </li>
        <li onClick={()=>{setmenu("mens")}}> <Link to="mens">men</Link> {menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=>{setmenu("wommen")}}> <Link to="wommen">wommen </Link>{menu==="wommen"?<hr/>:<></>} </li>
        <li onClick={()=>{setmenu("kinds")}}> <Link to="kinds">kinds</Link> {menu==="kinds"?<hr/>:<></>}  </li>
        <li onClick={()=>{setmenu("Api")}}> <Link to="Api">Api</Link> {menu==="Api"?<hr/>:<></>}  </li>

      </ul>
    
      <div className='nav-logo-cart'> 
        <Link to='login'>  <button>Login</button> </Link>
        <Link to="/cart"> <img src={cartIon} alt="cart-icon" /> </Link>
         <div className="nav-cart-count">  {getTotalCartItem()}       </div>
      </div>
      
    </div>
  )
}

export default Navbarpage
