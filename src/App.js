import React from "react";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { Route, Routes} from "react-router-dom";
import AboutPage from "./Components/Pages/About";



function App() {



  return (
    <>
     
      <Header />
       <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/About" element={<AboutPage/>} />
        
       </Routes>
       <Cart />
    
       
    </>
  );
}

export default App;
