/* eslint-disable react/prop-types */
import "./common.css";

const HeroSection = ({mainHead}) => {
  return (
    <div className="herosection-container">
      <div className="container hs-container mt-5">
        <h3 className="hs-title">{mainHead}</h3>
      </div>
    </div>
  );
};

export default HeroSection;
