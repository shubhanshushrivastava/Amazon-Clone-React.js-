import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout ">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/I/61-MMbp+W4L._SX3000_.jpg"
          alt=""
        />
        <div className="checkout_title">
          <h2> here we will get added itmes </h2>
        </div>
      </div>
      <div className="checkout_right ">
        {/* <h2>the subtotal yaha aega</h2> */}
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
