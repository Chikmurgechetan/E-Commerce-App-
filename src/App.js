import React from "react";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { Route, Routes} from "react-router-dom";
import AboutPage from "./Components/Pages/About";
import HomePage from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/Contact";
import ProductDetails from "./Components/Products/ProductDetails";



function App() {



  return (
    <>
     
      <Header />
       <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        
       </Routes>
       <Cart />
    
       
    </>
  );
}

export default App;
