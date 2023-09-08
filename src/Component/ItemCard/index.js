import React from "react";
import "./ItemCard.css";
import cardImage from "../../Assets/image/buger.jpg";
import { CartStore } from "../../context/Context";

const ItemCard = ({ product }) => {
  const {
    dispatch,
    state: { cart },
  } = CartStore();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  return (
    <div className="menu_card">
      <div className="menu_image">
        <img src={product?.image} />
      </div>

      <div className="small_card">
        <i className="fa-solid fa-heart"></i>
      </div>

      <div className="menu_info">
        <h2>{product?.name}</h2>
        <div>{/* <p className="menu_desc">{product?.description}</p> */}</div>

        <h3>{`$ ${product?.price}`}</h3>
        {/* <a  className="menu_btn" onClick={addToCart}>
              Order Now
            </a> */}
        {cart.some((prod) => prod._id === product._id) ? (
          <a
            className="menu_btn"
            style={{ background: "red" }}
            onClick={removeFromCart}
          >
            Remove from Cart
          </a>
        ) : (
          <a className="menu_btn" onClick={addToCart}>
            Order Now
          </a>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
