import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          gold
          <span className="colorLetter">I</span>luck
        </a>
        {/* <img className="logo" src={logo} alt="logo..." /> */}

       


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="projects"
                offset={-110}
                className="nav-link"
                href="#"
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-110}
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="#"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;