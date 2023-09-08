import React, {useEffect} from "react";
import "./MainHeader.css";
import logo from "../../Assets/image/logo.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import {CartStore} from '../../context/Context'

const MainHeader = () => {

  const {state : {cart}} = CartStore()
  const [isScroll, setisScroll] = useState(false)
  const addClass = () =>{
    if(window.scrollY > 200) {
      setisScroll(true)
    }else{
      setisScroll(false)
    }
  }
useEffect(()=>{
  window.addEventListener("scroll" , addClass )

  return () =>{  window.removeEventListener("scroll" , addClass )}
},[isScroll])

  return (
    <header id = "header"className={`main_header ${isScroll ? "add_box_shadow" : ""}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a className="active" href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
         
        </ul>
      </nav>

      <div className="icons">
        <div className="cart">
          <BsFillCartCheckFill size={25} />
          <span>{`${cart?.length}`}</span>
        </div>
        <AiFillCaretDown size={15} color="black" />
      </div>
    </header>
  );
};

export default MainHeader;
