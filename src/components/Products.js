import React from "react";

const Products = (props) => {
  const productitems = props.products.map((product) => {
    return (
      <div className="col-md-4" key={product.id}>
        <div className="product-item">
          <img
            className="image-product"
            src={`/images/0${product.id}.jpg`}
          ></img>
          <p>{product.title}</p>
          <p>{product.price} تومان</p>
          <button onClick={() => props.handeladdtocart(product)}>
            add to cart
          </button>
        </div>
      </div>
    );
  });

  return <div className="products">{productitems}</div>;
};

export default Products;
