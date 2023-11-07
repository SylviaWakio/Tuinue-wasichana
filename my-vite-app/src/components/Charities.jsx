import React from "react";
import { Link } from "react-router-dom";
import "./Charities.css";

const Charities = () => {
  const charities = [
    {
      name: "Charity 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./img/hero_bg_bw_1.jpg", // Image path
      link: "/donate/charity1",
    },
    {
      name: "Charity 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/img/charity2.jpg", // Image path
      link: "/donate/charity2",
    },
    {
      name: "Charity 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/img/charity3.jpg", // Image path
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
