import React, { useState, useEffect } from "react";
import "./Landing.css";
import MainHeader from "../../Component/MainHeader";
import MainBanner from "../../Component/MainBanner";
import About from "../../Component/About";
import Menu from "../../Component/Menu";
import Footer from "../../Component/Footer";
import Wrapper from "../../Component/Wrapper";
import axios from "axios";
import Header from "../../Component/Header";
// import Banner from "../../Component/Banner";
import { URL } from "../../apiConfig";

const Landing = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await axios.get(`${URL}products?page=${page}`);
    if (response) {
      setProducts(response?.data?.data);
      // console.log(response?.data)
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const Loading = () => {
    return (
      <div className="loder">
        <h1>Loading...</h1>
      </div>
    );
  };
  return (
    <section>
      <Header />
      {/* <MainHeader /> */}
      <Wrapper>
        {/* <Banner /> */}
        <MainBanner />
        <About />
        <Menu products={products} setPage={setPage} page={page} />
      </Wrapper>
      <Footer />
    </section>
  );
};

export default Landing;
