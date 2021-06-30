import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      {/* login image left */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search bar */}

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* links */}
      <div className="header_nav">
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">hello</span>
            <span className="header_optionLineTwo">hello</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/signin" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">order</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            {/* shopping basket icons */}
            <ShoppingBasketIcon />
            {/* number of items in the basket */}
            <span className="header_optionLineTwo header_basketCount">1</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
