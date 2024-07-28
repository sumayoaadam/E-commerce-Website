import React, { useContext } from 'react'
import "./productDisplay.css";
import star_icon from "../assetes/star_icon.png"
import star_dull_icon from "../assetes/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';


const ProductDisplay=(props) => {

  const {product}=props;
  const {AddToCart} = useContext(ShopContext);


  return (
    <div className='productdisplay' >
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />

        </div>
        <div className="productdisplay-img">
          <img  className="productdisplay-main-img"src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplay-right">
         <h1> {product.name}  </h1>
         <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon}  alt="" />
                <img src={star_icon}  alt="" />
                <img src={star_icon}  alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

         </div>
         <div className="productdisplay-right-price">
<div className="productdisplay-right-price-old">${product.old_price}</div>
  <div className="productdisplay-right-price-new">${product.new_price}</div>
     </div>
     <div className="productdisplay-right-description">
     online platforms that sell products or services. Most ecommerce content targets a specific audience with a primary objective in mind 
      such as making a sale or increasing website traffic.
     </div>
     <div className="productdisplay-right-size">
      <h1>Select size</h1>
      <div className="productdisplay-right-sizes">
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
      </div>
     </div> 
     <button onClick={()=>{AddToCart(product.id)}}>ADD TO CART</button>
     <p className="productdisplay-right-category"><span>Category:</span>Wommen, T-shirt, crop-Top  </p>
     <p className="productdisplay-right-category"><span>Tags:</span>moderm, T-shirt, crop-Top  </p>

  </div>
</div>
  )
}

export default ProductDisplay