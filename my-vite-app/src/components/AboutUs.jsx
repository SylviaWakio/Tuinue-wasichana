import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const About_Us = () => {
  return (
    <div className="section">
      <div className="overlap-group">
        <h1 className="heading-tuinue">About Us</h1>
        <p className="heading-together">Together we can make a difference</p>
      </div>
      <div className="ourstory">
        <h2>Our Story</h2>
        <p>
          In many sub-Saharan countries, school-going girls face challenges in accessing essential supplies like sanitary pads for their periods. Studies from the Ministry of Education in 2016 revealed that girls from low-income families miss 20% of school days in a year due to the lack of sanitary towels. This data showed that girls in primary school (classes 6 to 8) could lose up to 18 weeks out of 108 weeks, while those in high school could lose almost 24 weeks out of 144 weeks of learning.

          Our organization is dedicated to addressing this problem by providing not only sanitary towels but also clean water and sanitation facilities, such as toilets, to ensure that girls can meet the guidelines for proper menstrual hygiene defined by UNICEF.
        </p>
      </div>
      <div className="ourmission">
        <h2>Our Mission</h2>
        <p>
        In sub-Saharan countries, many school-going girls face barriers to education due to a lack of sanitary pads. Our organization is dedicated to addressing this challenge. We provide not only sanitary towels but also essential resources like clean water and proper sanitation facilities to ensure that girls can access quality education without disruption. Our mission is to empower girls with the tools they need for a brighter future, helping them break free from the cycle of missed school days and enabling them to pursue their dreams. Join us in this crucial mission, because every girl deserves a chance at a brighter tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About_Us;
