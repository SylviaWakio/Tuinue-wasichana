import React from "react";
import { Link } from "react-router-dom";
import "./Charities.css";

const Charities = () => {
  const charities = [
    {
      name: "Days for Girls",
      description: "Days for Girls is a global organization that aims to increase access to menstrual care and education for girls and women. They provide sustainable, reusable menstrual hygiene kits to girls and women in need around the world.",
      image: "/img/img_sm_1.jpg", // Image path
      link: "/donate/charity1",
    },
    {
      name: "Huru International",
      description: "Huru International focuses on providing reusable, sustainable menstrual products to girls and women in underserved communities, particularly in Africa. They offer Huru Kits, which include reusable pads and menstrual health education.",
      image: "/img/hero_bg_bw_1.jpg", // Image path
      link: "/donate/charity2",
    },
    {
      name: "ZanaAfrica Foundation",
      description: "The ZanaAfrica Foundation is dedicated to empowering adolescent girls in Kenya through education, health, and hygiene programs. They provide girls with access to sanitary pads and support comprehensive menstrual health education.",
      image: "/img/person_7.jpg", // Image path
      link: "/donate/charity3",
    },
  ];

  return (
    <div className="section">
      <div className="overlap-group">
        <div className="heading-tuinue">CHARITIES</div>
        <p className="heading-together">Together we can make a difference</p>
      </div>

      <div className="charities-list">
        <h2>Charities to Donate To:</h2>
        <ul>
          {charities.map((charity, index) => (
            <li key={index}>
              <h3>{charity.name}</h3>
              <img src={charity.image} alt={charity.name} /> {/* Display the image */}
              <p>{charity.description}</p>
              <Link to="/donate">Donate</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Charities;
