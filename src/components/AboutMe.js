import React from "react";
import Author from "../goldiluckcropped.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Author} alt="Author..."></img>
          </div>
        </div>

        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hello! I am Goldiluck. I am a full stack web developer. The
            technologies I use are MERN(MongodDb, Express, ReactJS and Nodejs).
            I also dabbled in Adobe Suites. I am very detail oriented. I have a
            background in Apparel Design. Expert in clothing alterations. I also
            teach sewing classes! A fast learner and self-starter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
