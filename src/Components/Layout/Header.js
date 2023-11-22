import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../Context/CartContext";
import AuthoContext from "../Context/Autho-Context";

const Header = () => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthoContext);
   const numberOfCartQuantity = ctx.cartItems.reduce((currNumber, item) => {
     return currNumber + item.quantity;
  }, 0);

  const cartHandler = () => {
    ctx.setModalVisability(true);
    ctx.setCartVisibility(!ctx.cartVisibility);
  };

  const LogoutHandler = () => {
    authCtx.logout();
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
          {!authCtx.isLoggedIn && (
            <Nav>
              <Nav.Link
                as={Link}
                to="/login"
                style={{
                  fontSize: "1.5rem",
                  color: "blue",
                  marginLeft: "33rem",
                }}
              >
                LOGIN
              </Nav.Link>
            </Nav>
          )}

          {authCtx.isLoggedIn && (
            <Button
              variant=""
              style={{ fontSize: "1.2rem", color: "red", marginLeft: "33rem" }}
              onClick={LogoutHandler}
            >
              LOGOUT
            </Button>
          )}
          {authCtx.isLoggedIn && (
            <Button
              onClick={cartHandler}
              variant="outline-warning"
              style={{ position: "absolute", right: 18 }}
            >
              <ShoppingCartIcon />- The Cart {numberOfCartQuantity};
             </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
