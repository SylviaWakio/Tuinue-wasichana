import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="link">
        <div className="enlight">CHARITY</div>
      </div>
      <div className="list-item-link-home">Home</div>
      <div className="list-item-link-about">About Us</div>
      <div className="list-item-link">Charities</div>
      <div className="overlap-group">
        <div className="symbol"></div>
        <div className="list-item-link-pages">Pages</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper">Donate</div>
      </div>
    </div>
  );
};

export default Navbar;
