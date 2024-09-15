// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g1 from "../../../assets/g1.jpg";
import g2 from "../../../assets/g2.jpg";
import g3 from "../../../assets/g3.jpg";
import g4 from "../../../assets/g4.jpg";
import g15 from "../../../assets/g15.jpg";
// import g6 from "../../../assets/g6.jpg";
import g7 from "../../../assets/g7.jpg";
// import g8 from "../../../assets/g8.jpg";
// import g9 from "../../../assets/g9.jpg";


// Custom Arrow Components
const NextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
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
  // eslint-disable-next-line react/prop-types
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
    { src: g1 },
    { src: g2 },
    { src: g3 },
    { src: g4 },
    { src: g15 },
    // { src: g6 },
    { src: g7 },
    // { src: g8 },
    // { src: g9},
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
  console.log(galleryImages)
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
