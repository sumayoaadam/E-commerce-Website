import React, { createContext, useState } from "react";
import all_product from "../components/assetes/all_product";
export const ShopContext= createContext(null);


const getDefaultcart =()=>{
    let cart ={};
    for(let index=0; index < all_product.length+1; index++){
      cart[index]=0;
    }
    return cart;
}

const ShopContextProvider= (props)=>{
    const [CartItems , setCartItems ]  = useState (getDefaultcart())

 
    //function AddCart
    const AddToCart =(itemId)=>{
      setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
      console.log(CartItems);

    }

      //Function remove from cart
    const RemoveFromCart =(itemId)=>{
      setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
      let totalAmount = 0;
      for(const item in CartItems)
      {
        if(CartItems[item]>0)
        {
          let itemInfo = all_product.find((product)=product.id===Number(item))
          totalAmount += itemInfo.new_price * CartItems[item];
        }
        return totalAmount;
      }

    }

    //Function to get total quantity of items in cart
    const getTotalCartItem = () => {

      let totalItem = 0;
      for (const item in CartItems)
         {
        if (CartItems[item] > 0) {
        totalItem += CartItems[item];
        }
      }
      return totalItem;
    }
     const ContextValue={ getTotalCartItem,getTotalCartAmount,all_product, CartItems,AddToCart, RemoveFromCart};
    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

