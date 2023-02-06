import React from "react";
import "./Product.css";
// import AddToCart from "./AddToCart";
import { useStateValue } from "./StateProvider";
import reducer, { initialState } from "./reducer";

function Product({ id, title, image, price, rating }) {
 
  const [{ cart }, dispatch] = useStateValue();
  
  
  const addToCart = () => {
    console.log("this is cart"+cart)
    
    dispatch({
      // type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


  return (
    <div className="product">
      <div className="product_info">
        <p>{title} </p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToCart}>add to cart</button>
    </div>
  );
}

export default Product;
