import React from 'react'
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className='newsletter'>
       <h1>Get Exclusive Offers On Your Email</h1>
       <p>Subscribe to our newsletter and stay update</p>
       <div>
         <input type="text" placeholder="Enter Your Email" />
         <button>Subscribe</button>
       </div>
        </div>
  )
}

export default Newsletter