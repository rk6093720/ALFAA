import React, { useState, memo, useCallback, useMemo } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import author1 from "../../../assets/Ruby_Singh.jpeg";
import author2 from "../../../assets/Usha_Kini.jpeg";
import author3 from "../../../assets/mg.jpeg";

import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dummyUserSVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><circle cx="12" cy="8" r="4" fill="#ccc" /><path fill="#ccc" d="M12 14c-5 0-9 2.5-9 5.5V22h18v-2.5c0-3-4-5.5-9-5.5z" /></svg>`;

const testimonialsData = [
  {
    author: author1,
    name: "Ruby Singh",
    title: "Trustee",
    text: "ALFAA is an answer to the omnipresent worry of parents having children with AUTISM, WHAT AFTER US? To give them sleepless nights and give them hope.",
  },
  {
    author: author2,
    name: "Usha Kini",
    title: "Trustee",
    text: "ALFAA provides teenagers and adults with autism a home away from home, an urgent need when such facilities are few and far in between.",
  },
  {
    author: author3,
    name: "Madhurima Ghose",
    title: "Trustee",
    text: "ALFAA supports youth and adults with Autism through innovative training and awareness. Led by passionate founder Ruby Singh, ALFAA excels in addressing Autism Spectrum Disorder challenges."
  },
];

const TestimonialItem = memo(({ index, activeSlide, testimonial }) => {
  const { author, name, title, text } = testimonial;
  return (
    <div className={`testi-item ${index === activeSlide ? "active-item" : ""}`} key={index} >
      <div className="test-item-header">
        <img src={author} alt={name} />
      </div>
      <div
        className={`test-item-content ${index === activeSlide ? "active" : ""}`}
      >
        <div className="quote-icon-wrapper">
          <div className="quote-icon my-3">
            <BiSolidQuoteAltRight size={20} />
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-row gap-1">
            {Array(5)
              .fill(0)
              .map((_, starIndex) => (
                <FaStar key={starIndex} color="#fe7f4c" />
              ))}
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="testi-item-footer">
        <h4>{name}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
});

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const beforeChange = useCallback((current, next) => setActiveSlide(next), []);

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
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
    }),
    [beforeChange]
  );

  return (
    <div className="testi_container-area">
      <div className="testi_container">
        <div className="row g-3 d-flex flex-wrap align-items-center">
          <div className="col-xl-3 col-lg-6 col-md-6" >
            <div className="testi_container-left-side">
              <div >
                <span className="as_subtitle" style={{color:"rgb(254, 127, 76)"}}>OUR TESTIMONIALS</span>
                <h4 className="as_title" style={{color:"var(--main-color)"}}>What Our Trustees Tell About Us</h4>
              </div>
              <div className="as_text mt-4">
                <p>
                  Charity is the act of extending kindness unconditionally, a
                  conscious act made by the heart without expecting anything in
                  return.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-6" >
            <Slider {...settings} >
              {testimonialsData.map((testimonial, index) => (
                <TestimonialItem className="testimonial"
                  key={index}
                  index={index}
                  activeSlide={activeSlide}
                  testimonial={testimonial}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
