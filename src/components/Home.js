import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/styles.css";
import Product from "./Product";
function Home() {
  // const [product] = useState([]);
  const product = useSelector((state) => state.products.products);

  return (
    <div className="home">
      <img
        className="home_image "
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        {product.map((value) => (
          <Product
            id={value.id}
            title={value.title}
            price={value.price}
            rating={value.rating}
            image={value.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
