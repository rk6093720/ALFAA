/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AboutPoorex.css";
import Carousel from 'react-bootstrap/Carousel';
import g1 from "../../../assets/g1.jpg";
import g2 from "../../../assets/g2.jpg";
import g3 from "../../../assets/g3.jpg";
import g4 from "../../../assets/g4.jpg";
import g15 from "../../../assets/g15.jpg";
import { CarouselItem } from "react-bootstrap";
const AboutPoorex = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inlineBlock", }}
        onClick={onClick}
      />
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inlineBlock" }}
        onClick={onClick}
      />
    );
  };
  const aboutImages = [
    { src: g1 },
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g15 }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    extArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="my-5 about_poorex-area">
      <div className="container about_poorex">
        <div className="about_poorex_left animated tpfadeInDown">
        <div className="about_section_title mt-5">
            <h4 className="as_title" style={{ color: "#fe7f4c", display: 'inline-block', margin: 0 }}>ABOUT</h4>
             <h4 className="as_title second_title" style={{ color: "var(--main-color)", display: 'inline-block', margin: '0 0 0 8px' }}> ALFAA</h4>
        </div>
          <div className="about_section_title" >
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
          {/* <Slider {...settings}>
          {
            aboutImages.map((image,index)=>(
              <div className="col-sm-10 apr-main-img" key={index}>
            <img src={image?.src} alt={`Image${index + 1}`} style={{border:"1px solid blue"}} className="about-image" />
          </div>
            ))
          }
          </Slider> */}
          <Carousel {...settings}>
            {
             aboutImages.map((item,index)=>(
              <CarouselItem key={index}>
               <img src={item.src} alt={`Image${index + 1}`} className="about-image" />
              </CarouselItem>
             )) 
            }
            
          </Carousel>

        </div>

        {showVideo && (
          <div className="video-overlay" style={{border:"1px solid red"}}>
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
