import React from "react";

import Navbarpage from "./lastproject/components/Navbar/Navbarpage";
import {Routes,Route} from "react-router-dom";
import Shop from "./lastproject/pages/Shop";
import ShopCategory from "./lastproject/pages/ShopCategory";
import Cart from "./lastproject/pages/Cart";
import LogingSingUp from "./lastproject/pages/LogingSingUp";
import Footer from "./lastproject/components/Footer/Footer";
import men_banner  from "./lastproject/components/assetes/banner_mens.png";
import women_banner  from "./lastproject/components/assetes/banner_women.png";
import kids_banner  from "./lastproject/components/assetes/banner_kids.png";
import Product from "./lastproject/pages/Product";
import APPE from "./lastproject/components/Api/Api";


function App(){

    return (
      <div>
        <Navbarpage/>
        <Routes>

        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/wommen" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/kinds" element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path="/Api" element={<APPE/>} />

        <Route path="/product/:productId" element={<Product />} />
        
        
        
         
        <Route path="Cart" element={<Cart/>} />
        <Route path="Login" element={<LogingSingUp/>}/>
        </Routes>
        {/* <BreadCrums Product={Product}/> */}
        <Footer/>
       
 
  </div>
    );
}


export default App;
