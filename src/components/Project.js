import React from "react";
import Project1 from "../images/carpeDiem.png";
import Project2 from "../images/stashbusters.jpg";
import Project3 from "../images/sable.png";

const Project = () => {
  return (
    <div id="projects" className="project">
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
                <img
                  className="project-image"
                  src={Project1}
                  alt="project1"
                  
                ></img>
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
                <img
                  className="project-image"
                  src={Project2}
                  alt="project2"
                ></img>
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
                <img className="project-image"
                src={Project3}
                alt="project3"
                href="https://damp-hollows-69227.herokuapp.com/">
          
                </img>
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
                <p className="project-image">
                  insert images here. replace P tag
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
