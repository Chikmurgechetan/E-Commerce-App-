import React, { useContext } from "react";
import { Button, Nav, NavLink, Navbar } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../Context/CartContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const ctx = useContext(CartContext);
  const location = useLocation();

  const numberOfCartQuantity = ctx.cartItems.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  },0);

  const cartHandler  = () =>{
    ctx.setModalVisability(true);
  }
    
   // Function to check if the current route is the store route
   const isStoreRoute = () => {
    return location.pathname === "/";
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ padding: "2rem", boxShadow: "1px 1px 1px 2px red" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{fontWeight:'bold',color:'white',fontFamily:'inherit'}}>
            <NavLink href="/Home">HOME</NavLink>
            <NavLink href="/">STORE</NavLink>
            <NavLink href="/About">ABOUT</NavLink>
          </Nav>
          {isStoreRoute() && (
          <Button
            onClick={cartHandler}
            variant="outline-warning"
            style={{ position: "absolute", right: 18 }}
          >
            < ShoppingCartIcon/>
           -  CART - {numberOfCartQuantity}
          </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
