import React from 'react'
import "./newcollection.css"
import new_collecion from "../assetes/new_collections";
import Item from '../item/Item.jsx';


const Newcollection = () => {
  return (
    <div className='new-collection'>
        <h1> NEW COLLECTION</h1>
       <hr/>
       <div className="collection"> 
       {new_collecion.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

       }
    )}
       </div>
    </div>
  )
}

export default Newcollection