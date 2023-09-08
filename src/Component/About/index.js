import React from "react";
import "./About.css";
import aboutImage from '../../Assets/image/Food-Plate.png'

const About = () => {
  return (
    <section className="about_main" id="About">
      
        <div className="image">
            <img src={aboutImage} alt=""/>
        </div>

        <div className="about_text">
          <h1>
            <span>About</span>Us
          </h1>
          <h3>Why Choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            est. Doloremque sapiente veritatis laboriosam corrupti optio et
            maxime. Ad, amet explicabo eaque labore cupiditate quasi nostrum
            nemo recusandae id quibusdam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque ab, dolores pariatur cum
            exercitationem, illo nisi veritatis vitae ea deleniti fugiat
            quisquam tempora, accusantium corrupti excepturi optio. Inventore,
            cupiditate recusandae.
          </p>
          <button>Order Now</button>
        
      </div>

     
    </section>
  );
};

export default About;
