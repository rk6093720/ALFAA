import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery1 from "../../../assets/g5.jpg";
import gallery2 from "../../../assets/g2.jpg";
import gallery3 from "../../../assets/g3.jpg";
import gallery4 from "../../../assets/g4.jpg";
import gallery5 from "../../../assets/g1.jpg";
import gallery6 from "../../../assets/g7.jpg";


// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const Gallery = () => {
  const galleryImages = [
    { src: gallery1 },
    { src: gallery2 },
    { src: gallery3 },
    { src: gallery5 },
    { src: gallery6 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    extArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="gallery my-5">
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div className="gallery-image-container" key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Gallery;
