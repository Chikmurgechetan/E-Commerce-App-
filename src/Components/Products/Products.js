import React from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";

const Products = () => {
  const ProductArray = [
    {
      id: "P1",
      head: "Alubm 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "P2",
      head: "Alubam 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "P3",
      head: "Alubam 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "P4",
      head: "Alubam 4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return(
       <>
        <h1 style={{
          fontSize: "30px",
          textAlign: "center",
          padding: "20px",
          fontFamily:'serif',
          fontWeight: "bold",
    
        }}>MUSIC</h1>
       <Row  className="no-gutters"  style={{marginLeft:'12rem' , marginTop:'2rem'}}>
       {
        ProductArray.map((product)=>{
            return <ProductItem key={product.id} product={product}/>
        })
       }
       </Row>
      </>
  ) 
    
 
};
export default Products;
