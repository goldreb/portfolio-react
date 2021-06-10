import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faShopify,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">Services Offered</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faDesktop}
                    size="2x"
                  />
                </div>
                <h3>Web Design</h3>
                <p>
                  I approach each project individually and always focus on the
                  results.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faFileCode}
                    size="2x"
                  />
                </div>
                <h3>Web Development</h3>
                <p>
                  I approach each project individually and always focus on the
                  results.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faWordpress}
                    size="2x"
                  />
                </div>
                <h3>Wordpress Design</h3>
                <p>
                  I approach each project individually and always focus on the
                  results.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faShopify}
                    size="2x"
                  />
                </div>
                <h3>Shopify Design</h3>
                <p>
                  I approach each project individually and always focus on the
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
