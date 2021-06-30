import React from "react";
import { useDispatch } from "react-redux";
import { setProducts, addProducts } from "../redux/action/ProductAction";
function Product({ id, title, price, rating, image }) {
  const dispatch = useDispatch();
  const onAddProduct = () => {
    const new_products = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    };
    dispatch(addProducts(new_products));
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={onAddProduct}>Add to Basket</button>
    </div>
  );
}

export default Product;
