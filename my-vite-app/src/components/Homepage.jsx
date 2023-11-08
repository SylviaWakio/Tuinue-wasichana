import React from "react";
import  {Link} from "react-router-dom"
import "./Home.css";

const Homepage = () => {
  return (
    <div className="section">
      <div className="overlap-group">
        <div className="heading-tuinue">TUINUE WASICHANA</div>
        <p className="heading-together">Together we can make a difference</p>
      </div>
      <div className="link">
        <Link to="/charities">
        <div className="text-wrapper">Donate Now</div>
        </Link>
      </div>
      <div className="div-probootstrap">
        <div className="div-item">
          <div className="symbol"></div>
          <div className="heading-give">GIVE DONATION</div>
          <p className="div">Through the act of giving, we plant the</p>
          <div className="text-wrapper-2">seeds of positive change and nurture</div>
          <div className="text-wrapper-3">the growth of a better world.</div>
          <Link to="/charities">
          <div className="link-sign-in">Learn More</div>
          </Link>
        </div>
        <div className="div-item-2">
          <div className="symbol"></div>
          <div className="heading-become">BECOME DONER</div>
          <p className="div">Become a donor to a charity and be </p>
          <div className="text-wrapper-2">the driving force behind positive </div>
          <div className="text-wrapper-3">change, transforming lives and making</div>
          <div className="text-wrapper-4">a lasting impact on causes that matter</div>
          <Link to="signup">
          <div className="link-lear-more">Sign up</div>
          </Link>
        </div>
        <div className="div-item-3">
          <div className="symbol"></div>
          <div className="heading-start-a">START A CHARITY</div>
          <p className="div">Starting a charity is the spark that </p>
          <div className="text-wrapper-2">ignites a wildfire of compassion, </div>
          <div className="text-wrapper-3">changing lives and lighting the path</div>
          <div className="text-wrapper-4">to a brighter future.</div>
          <Link to="/signup" >
          <div className="link-sign-in">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage ;
