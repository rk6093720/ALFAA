
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import logo from "/alfaa-logo.png";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="sticky-navbar">
      <div className="container navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light py-0">
          <Link className="navbar-brand" to="/" onClick={handleClose}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="menu-cross">
              {isExpanded ? <span>&#x2715;</span> : <span>&#9776;</span>}
            </span>
          </button>
          <div
            className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home" onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus" onClick={handleClose}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team" onClick={handleClose}>
                  Team
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/donations" onClick={handleClose}>
                  Donations
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/donations" onClick={handleClose}>
                    Donations
                  </Link>
                  <Link className="dropdown-item" to="/donationdetails" onClick={handleClose}>
                    Donation Details
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/blogs" onClick={handleClose}>
                  Blogs
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/blogs" onClick={handleClose}>
                    Blogs
                  </Link>
                  <Link className="dropdown-item" to="/blogdetails" onClick={handleClose}>
                    Blog Details
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/events" onClick={handleClose}>
                  Events
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/events" onClick={handleClose}>
                    Events
                  </Link>
                  <Link className="dropdown-item" to="/eventdetails" onClick={handleClose}>
                    Event Details
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus" onClick={handleClose}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trusty" onClick={handleClose}>
                  Trusty
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex order-lg-1 ml-auto align-items-center gap-5 donate-contact">
            <div className="btn nav-donate-btn">
              <Link className="text-decoration" to="/donatenow" onClick={handleClose}>
                Donate Now
              </Link>
            </div>
            <div className="phone_contact">
              <div className="phone-icon">
                <LiaPhoneVolumeSolid
                  style={{ color: "#FFF", fontSize: "30px" }}
                />
              </div>
              <div className="d-flex flex-column">
                <div>
                  <span>Call Us Anytime</span>
                </div>
                <div>
                  <span>+91 9876543210</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
