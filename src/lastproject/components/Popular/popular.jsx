import React from 'react'
import "./popular.css";
import data_product  from "../assetes/data"
import Item from '../item/Item.jsx';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMMEN</h1>
      <hr/>
      <div className="popular-item">
        {/* function kan wuxu data noogu keeni doona file data nogu jirto  */}
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
