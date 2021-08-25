import React from "react";
import DayScheduler from "../images/day-schedule-image.JPG";
import Weather from "../images/weather.JPG";
import GeneratePass from "../images/generatedPassword.JPG";
//fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//react pop-up box -Work in Progress....
// import { PopupboxManager, PopupoxContainer } from "react-popupbox";

const MiniProject = () => {
  return (
    <div>
      <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">mini projects</h1>
          <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={DayScheduler}
                alt="dayscheduler"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={Weather}
                alt="weather"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box">
              <img
                className="portfolio-image"
                src={GeneratePass}
                alt="password-generator"
              ></img>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProject;
