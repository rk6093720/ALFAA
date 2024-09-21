/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Healthy = () => {
  return (
    <>
      <div className="event-details-item2">
        <div className="ed-item2-logo">
          <img src="/alfaa-logo.png" alt="Alfaa Logo" />
        </div>
        <div className="ed-item2-text">
          <h4>Healthy People Better in The World</h4>
          <span>$6,790 of $10,000 raised</span>
        </div>
        <div>
          <Link to="/donate" className="donate-outline-btn">
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Healthy;
