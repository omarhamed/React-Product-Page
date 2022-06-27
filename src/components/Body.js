import React from "react";
import Product from "./Product";

function Body() {
  const products = [
    {
      id: 1,
      name: "Mobile",
      price: 254,
      image:
        "https://static.toiimg.com/thumb/msid-89822516,imgsize-22294,width-400,resizemode-4/89822516.jpg",
    },
    {
      id: 2,
      name: "Tv",
      price: 5000,
      image:
        "https://static.toiimg.com/thumb/msid-89822516,imgsize-22294,width-400,resizemode-4/89822516.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      price: 12603,
      image:
        "https://static.toiimg.com/thumb/msid-89822516,imgsize-22294,width-400,resizemode-4/89822516.jpg",
    },
    {
      id: 4,
      name: "Samrt Watch",
      price: 6890,
      image:
        "https://static.toiimg.com/thumb/msid-89822516,imgsize-22294,width-400,resizemode-4/89822516.jpg",
    },
  ];

  function showCart(productName) {
    alert(`${productName} Added To Cart`);
  }

  const productsList = products.map((product, index) => (
    <Product product={product} key={index} ShowHandler={showCart} />
  ));

  return (
    <div className="mt-4 mb-4">
      <h3 className="mb-4">Product List</h3>
      <div className="container">
        <div className="row">{productsList}</div>
      </div>
    </div>
  );
}

export default Body;
