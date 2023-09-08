import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard";
import "./Menu.css";
import axios from "axios";
import { URL } from "../../apiConfig";
import { CartStore } from "../../context/Context";
import { AiFillCaretDown } from "react-icons/ai";

const Menu = ({ products, setPage, page }) => {
  const [fiterDropdown, setFiterDropdown] = useState(false);

  const stateData = CartStore();
  // console.log(stateData.state);

  const updatePage = (p) => {
    setPage(p);
  };

  return (
    <section className="main__menu">
      <div className="menu_text">
        <h1>
          <span>Our</span>Menu
        </h1>
      </div>

      <div className="filers">
        <input type="text" placeholder="Search here" />
        <div>
          <button
            onClick={() => {
              setFiterDropdown(!fiterDropdown);
            }}
          >
            Filters <AiFillCaretDown className="dropdown" />
          </button>
          {fiterDropdown && (
            <div className="dropdown_container">
              <a className="filter_button">By Ascending </a>
              <a className="filter_button">By Descending </a>
              <a className="filter_button">By Rating </a>
            </div>
          )}
        </div>
      </div>

      <div className="menu_box">
        {products?.map((product) => (
          <ItemCard key={product?._id} product={product} />
        ))}
      </div>

      <div className="page_button">
        <button
          className="btn_prev"
          onClick={() => {
            if (page > 1) {
              updatePage(page - 1);
            }
          }}
        >
          Previous
        </button>
        {products?.length < 12 ? null : (
          <button
            className="btn_next"
            onClick={() => {
              updatePage(page + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Menu;
