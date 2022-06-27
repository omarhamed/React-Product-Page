import React from "react";

function Product({ product, ShowHandler }) {
  return (
    <div className="col-md-3">
      <div className="card width-18">
        <img src={product.image} className="card-img-top" alt="product image" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price} L.E</p>
          <button
            className="btn btn-primary"
            onClick={() => ShowHandler(product.name)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
