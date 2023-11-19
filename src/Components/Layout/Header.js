import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../Context/CartContext";

const Header = () => {
  const ctx = useContext(CartContext);

  const numberOfCartQuantity = ctx.cartItems.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);

  const cartHandler = () => {
    ctx.setModalVisability(true);
  };

  // Function to check if the current route is the store route

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
          <Nav
            className="mr-auto"
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "inherit",
            }}
          >
            <Nav.Link
              as={Link}
              to="/home"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>

          <Button
            onClick={cartHandler}
            variant="outline-warning"
            style={{ position: "absolute", right: 18 }}
          >
            <ShoppingCartIcon />- CART - {numberOfCartQuantity}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
