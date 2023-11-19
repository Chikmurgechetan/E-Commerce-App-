import React, { useContext } from "react";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./Components/Pages/About";
import HomePage from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/Contact";
import ProductDetails from "./Components/Products/ProductDetails";
import Login from "./Components/Layout/Login";
import AuthoContext from "./Components/Context/Autho-Context";
import CartContext from "./Components/Context/CartContext";

function App() {
  const authCtx = useContext(AuthoContext);
  const ctx = useContext(CartContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        {authCtx.isLoggedIn && <Route path="/About" element={<AboutPage />} />}
        {authCtx.isLoggedIn && <Route path="/Home" element={<HomePage />} />}
        {authCtx.isLoggedIn && (
          <Route path="/Contact" element={<ContactUs />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/products/:id" element={<ProductDetails />} />
        )}
        {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {ctx.cartVisibility && <Cart />}
    </>
  );
}

export default App;
