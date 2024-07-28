import React from 'react'
import Hero from '../components/Heroo/Hero'
import Popular from '../components/Popular/popular'
import Offers from '../components/Offers/offers'
import Newcollection from '../components/NewCollection/newcollection'
import Newsletter from '../components/NewSletter/newsletter'
import Product from './Product'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>

      {/* <Footer/> */}
     
    </div>
  )
}

export default Shop
