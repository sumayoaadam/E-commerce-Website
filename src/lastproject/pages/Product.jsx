import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../components/BreadCrums/BreadCrums'
import ProductDisplay from '../components/ProductDisplay/productDisplay'
import DescriptionBox from '../components/DescriptionBox/descriptionBox'


const Product = () => {
  const {all_product} = useContext(ShopContext)
  const{productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product  ={product} />
      <DescriptionBox/>
    </div>
  )
}

export default Product
