import React from "react";
import "../styles/styles.css";
function CheckoutProducts({ id, title, price, rating, image }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutproducts_title">{title}</p>
        <p className="checkoutproducts_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
