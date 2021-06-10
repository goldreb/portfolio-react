import React from "react";

const Project = () => {
  return (
    <div className="project">
      <h1 className="py-5">projects</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  {/* <FontAwesomeIcon
                      className="icon"
                      icon={faDesktop}
                      size="2x"
                    /> */}
                </div>
                <h3>Project 1</h3>
                <p>insert images here. replace P tag</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  {/* <FontAwesomeIcon
                    className="icon"
                    icon={faFileCode}
                    size="2x"
                  /> */}
                </div>
                <h3>Project 2</h3>
                <p>insert images here. replace P tag</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  {/* <FontAwesomeIcon
                      className="icon"
                      icon={faWordpress}
                      size="2x" */}
                  {/* /> */}
                </div>
                <h3>Project 3</h3>
                <p>insert image here. replace P tag</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  {/* <FontAwesomeIcon
                      className="icon"
                      icon={faShopify}
                      size="2x"
                    /> */}
                </div>
                <h3>Project 4</h3>
                <p>insert images here. replace P tag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
