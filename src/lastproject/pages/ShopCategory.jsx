import React, { useContext } from 'react'
import "./Css/ShopCategory.css"
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/assetes/dropdown_icon.png"
import Item from '../components/item/Item.jsx';

const ShopCategory = (props) => {
  const {all_product} =  useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt=""/>
      <div className="shopcatgory-indexSort">
        <p>
          <span>Showing 1 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img className='shopcategorybanner' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopgategory-product">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
      </div>
       <div className="shopcateory-loadmore">
        Explore More
       </div>
    </div>
  )
}

export default ShopCategory
