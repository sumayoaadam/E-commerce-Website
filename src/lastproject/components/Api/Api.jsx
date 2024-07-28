import React from 'react'
import { useState , useEffect } from "react";
import "./Api.css";

const APPE = () => {
 //variable user holding state 
 const[users,setUsers]=useState([]);
 //variable loading tracking our date 
 
 const [isloading,setIsloading] = useState(true);
  //variale error.
 const[error,setError]=useState(null);
 
 //side effect
 useEffect(()=>{
     const fetchusers = async() => {
        
         try {
             const response= await fetch('https://fakestoreapi.com/products');
             if(!response.ok){
                 throw new Error ('failed to fetch date');
             }
             const date = await response.json();
             setUsers(date);
             setIsloading(false);
         } catch (error) {
             setError(error.message);
             setIsloading(false);    
         }
     };
     
     fetchusers();
     
     
 
 },[]);
 
 if(isloading) {
     return  <p>loading...</p>;
 }
 if (error) {
     return <p>Error: {error}</p>;
 }
     return (
         <div>
             <h1>Fake Api Store</h1>
          
          <div className='Api'>

          <ul>{users.map((user) => (
                
                <li key={user.id} >
                   {/* <strong> {user.title} </strong>  */}
                 
                   <img src={user.image} alt={user.title} />
                  
                   <p>Price: ${user.price}</p>
                   <p>Quantity: {user.quantity}</p>
                  
                    ({user.price})           
                </li>           

                ))}
          </ul>
       

          </div>
         </div>
     );
 }

export default APPE