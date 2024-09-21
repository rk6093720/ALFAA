/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import { FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./EventCards.css";
import { colors } from "@mui/material";

const EventCard = memo(({ eventCards }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5 event-area">
      <div className="row d-flex flex-row justify-content-center align-items-center">
        {eventCards.map(({ imgSrc, date, month, header }, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 event-item"
          >
            <div className="card border-0 bg-white position-relative">
              <div className="event-item_thumb">
                <img
                  src={imgSrc}
                  className="card-img-top"
                  alt="Card Image"
                  style={{ borderRadius: "0px" }}
                />
                <div className="number-overlay">
                  <h4 className="m-0 text-white">{date}</h4>
                  <span className="text-white">{month}</span>
                </div>
              </div>
              <div className="card-body d-flex flex-column justify-content-between gap-3">
                <div className="card-subtitle d-flex flex-row justify-content-between">
                  <div className="time-location-icon gap-1">
                    <FaClock className="me-1" size={12} />
                    <span>4:30 am - 7:30 pm</span>
                  </div>
                  <div className="time-location-icon">
                    <FaMapMarkerAlt className="ms-3 me-1" size={12} />
                    <span>BANGALORE,INDIA</span>
                  </div>
                </div>
                <div>
                  {/* <Link to="/eventdetails" className="text-decoration-none"> */}
                  <h5 className="card-title card-title-h5" style={{ color: '#007bff' }}>{header}</h5>

                  {/* </Link> */}
                </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default EventCard;
