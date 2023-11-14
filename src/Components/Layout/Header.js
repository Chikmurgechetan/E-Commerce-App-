import React, { useContext } from "react";
import { Button, Nav, NavLink, Navbar } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../Context/CartContext";

const Header = () => {
  const ctx = useContext(CartContext);

  const cartHandler  = () =>{
    ctx.setModalVisability(true);
  }

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
            <NavLink href="#">HOME</NavLink>
            <NavLink href="#">STORE</NavLink>
            <NavLink href="#">ABOUT</NavLink>
          </Nav>
          <Button
            onClick={cartHandler}
            variant="outline-warning"
            style={{ position: "absolute", right: 18 }}
          >
            < ShoppingCartIcon/>
            CART - 0
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
