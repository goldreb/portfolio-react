import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Full stack Web Developer</h1>
        <Typed
          className="typed-text"
          strings={["Web Design  Web development  Wordpress "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
