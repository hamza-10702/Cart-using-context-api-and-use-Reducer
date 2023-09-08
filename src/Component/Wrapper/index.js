import React from "react";
import './Wrapper.css'

const Wrapper = ({ children }) => {
  return <section className="main__wrapper">{children}</section>;
};

export default Wrapper;
