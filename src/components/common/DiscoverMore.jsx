import React from "react";
import hands from "../../assets/volunteer.png";
import { Link } from "react-router-dom";
import "./common.css";

const DiscoverMore = React.memo(() => {
  return (
    <section className="discover-more">
      <div className="container discover-more-content">
        <div className="d-flex flex-row justify-content-between align-content-center gap-5">
          <img
            src={hands}
            alt="Volunteer hands"
            width="65"
            height="65"
            className="hands-icon"
          />
          <h4>Join  hands with us for a better life and future</h4>
        </div>
        <div className="btn donate-btn">
          <Link className="text-decoration" to="/aboutus">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
});

export default DiscoverMore;
