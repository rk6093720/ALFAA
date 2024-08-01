import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../../assets/g6.jpg";
import "./AboutPoorex.css";

const AboutPoorex = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="my-5 about_poorex-area">
      <div className="container about_poorex">
        <div className="about_poorex_left animated tpfadeInDown">
        <div className="about_section_title mt-5">
  <h4 className="as_title" style={{ color: "#fe7f4c", display: 'inline-block', margin: 0 }}>ABOUT</h4>
  <h4 className="as_title" style={{ color: "var(--main-color)", display: 'inline-block', margin: '0 0 0 8px' }}> ALFAA</h4>
</div>

          <div className="about_section_title">
            <div className="as_text">
              <p>
              ALFAA stands for ASSISTED LIVING FOR AUTISTIC ADULTS.The primary objective of ALFAA is to create quality living with assisted care and developmental services for adults with autism and related conditions.
              </p>
            </div>
            <div className="btn donate-btn">
              <Link className="text-decoration" to="/aboutus">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="about_poorex_right animated fadeInRight">
          <div className="col-sm-10 apr-main-img">
            <img src={img1} alt="" className="about-image" />
          </div>
        </div>

        {showVideo && (
          <div className="video-overlay">
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <button className="close-video" onClick={toggleVideo}>
              <FaTimes size={25} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPoorex;
