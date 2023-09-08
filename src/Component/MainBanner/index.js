import React from "react";
import bannerImage from '../../Assets/image/main_img.png'
import './MainBanner.css'
const MainBanner = () => {
  return (
    <section className="main__banner">
      <div className="banner_text">
        <h1>
          Get Fresh <span>Food</span> <br /> in a Easy Way
        </h1>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            reiciendis quaerat nobis deleniti amet non inventore. Reprehenderit
            recusandae voluptatibus minus tenetur itaque numquam cum quos
            dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Cumque facilis, quaerat cupiditate
            nulla quibusdam quo sunt esse tempore inventore vel voluptate, amet
            laudantium adipisci veniam nihil quam molestiae omnis mollitia.
          </p>
          <button>Order Now</button>
        </div>
      </div>
      <div className="banner__img">
        <img src={bannerImage} alt=""/>
      </div>
    </section>
  );
};

export default MainBanner;
