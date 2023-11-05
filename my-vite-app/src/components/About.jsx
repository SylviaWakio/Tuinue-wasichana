import React from 'react';
import "./About.css"
const App = () => {
  return (
    <div>
      <nav className="navbar navbar-default probootstrap-navbar">
        <div className="container">
          {/* ... Navbar content ... */}
        </div>
      </nav>

      <section className="probootstrap-hero probootstrap-hero-inner" style={{ backgroundImage: 'url(img/hero_bg_bw_1.jpg)', backgroundPosition: '50% 50%' }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="probootstrap-slider-text probootstrap-animate" data-animate-effect="fadeIn">
                <h1 className="probootstrap-heading probootstrap-animate">Donate <span>Together we can make a difference</span></h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            {/* ... Form and content ... */}
          </div>
        </div>
      </section>

      <footer className="probootstrap-footer probootstrap-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 probootstrap-animate">
              {/* ... About Us Widget ... */}
            </div>
            {/* ... Contact Info Widget ... */}
            {/* ... Donation Widget ... */}
          </div>
        </div>

        <div className="probootstrap-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-left"></div>
              <div className="col-md-4 probootstrap-back-to-top">
                <p><a href="#" className="js-backtotop">Back to top <i className="icon-arrow-long-up"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* External scripts */}
      <script src="js/scripts.min.js"></script>
      <script src="js/main.min.js"></script>
      <script src="js/custom.js"></script>
    </div>
  );
};

export default App;
