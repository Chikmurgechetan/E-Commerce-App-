import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const Products = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          padding: "20px",
          fontFamily: "serif",
          fontWeight: "bold",
        }}
      >
        PRODUTS
      </h1>
      <Row
        className="no-gutters"
        style={{ marginLeft: "12rem", marginTop: "2rem" }}
      >
        {ctx.productsList.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </Row>
    </>
  );
};
export default Products;
