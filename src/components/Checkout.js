import React from "react";
import "../styles/styles.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
function Checkout() {
  const products = useSelector((state) => state.products.basket);
  console.log(products, "show data value");
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://salesfunnelhq.com/wp-content/uploads/2018/07/AdBadger_Banner_Ads_06-1024x225.png"
          alt=""
        />

        {products.map((value, index) => (
          <CheckoutProducts
            key={index}
            id={value.id}
            title={value.title}
            price={value.price}
            rating={value.rating}
            image={value.image}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
