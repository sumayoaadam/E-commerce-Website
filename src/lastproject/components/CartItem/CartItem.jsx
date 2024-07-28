import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../context/ShopContext'
import remove_icon from "../assetes/cart_cross_icon.png"

const CartItems = () => {
    const {getTotalCartAmount,all_product,CartItems,RemoveFromCart} = useContext(ShopContext)
  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>products</p>
        <p>title</p>
        <p>price</p>
        <p>quantitiy</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(CartItems[e.id]>0)
           { 
            return <div>
              <div className="cartitem-format cartitem-format-main">
        <img src={e.image} alt=""  className='carticon-product-icon'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='cartitem-quantity'>{CartItems[e.id]}</button>
        <p>${e.new_price*CartItems[e.id]}</p>
        <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{RemoveFromCart(e.id)}} alt="" />
      </div>
      <hr />
      </div>
           }
           return null;
      })}
     <div className="cartitem-down">
      <div className="cartitem-total">
        <h1>Cart Total</h1>
        <div>
      <div className="cartitem-total-item">
        <p>subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
     
      <div className="cartitem-total-item">
        <p>shipping fee</p>
        <p>$free</p>
      </div>
     <hr />

      <div className="cartitem-total-item">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
      </div>
     </div>

      {/* checkout button */}
      <button className='cartitem-checkout-btn'>Checkout</button>
    </div>
    <div className="cartitem-promocode">

      <p>if you have apromo , code enter it here</p>
      <div className="cartitem-promobox">

        <input type="text" placeholder="Enter Your Promo Code" />
        <button>Apply</button>
      </div>
    </div>
    </div>
    </div>

  )
}

export default CartItems