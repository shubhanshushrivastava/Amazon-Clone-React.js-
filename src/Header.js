import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  // const [cart, setCart] = useState(0);
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        {/* <button onClick={setCart(cart + 1)}>ADD CARTTT</button> */}
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_lineOne"> Hello </span>
          <span className="header_option_lineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_option_lineOne"> Returns </span>
          <span className="header_option_lineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option_lineOne"> Your </span>
          <span className="header_option_lineTwo">Prime</span>
        </div>

        <div className="header_optionCart">
          <ShoppingCartIcon />
          <span className="header_option_lineTwo header_cart_count">
            {/* 0 */}
            {/* {cart} */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
