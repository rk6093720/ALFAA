import React from "react";
import "./LandingSection.css";

import { Link } from "react-router-dom";

import { FaBookAtlas} from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { Grid } from "@mui/material";


const LandingSection = () => {

  return (
    < div >
      <div className="hero_section">
        <div className="container">
          <div className="hero_section_content ">
              
          </div>
        </div>
      </div>

      {/* ---------------   Charity Cards --------------*/}
      <div className="charity-cards-area">
        <div className="container charity_cards">
          <div className="d-flex justify-content-center">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body charity_card">
                    <div className="d-flex justify-content-between align-items-center  ">
                      <h4 className="card-title mb-0" ><b>We Find & Fund</b></h4>
                      <div className="icon-container">
                      <FaCircleDollarToSlot size={32}/>
                      </div>
                    </div>
                    <p className="card-text ct">
                    At ALFAA, we actively seek and secure funding from parents of the residents or different companies to support our program and initiatives and also for the autistic adults so that they get the necessary resources for their growth and to thrive in a supportive environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body charity_card">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="card-title mb-0">
                     <b> We Educate </b>
                      </h4>
                      <div className="icon-container">
                        <FaBookAtlas size={32} />
                      </div>
                    </div>
                    <p className="card-text mc">
                    At ALFAA, we educate the residents by methods which are tailored to the needs of autistic adults. Our focus is on educating these adults who struggle by enhancing their knowledge and skills they need for their growth and independence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body charity_card">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="card-title mb-0"><b>We Provide Care</b></h4>
                      <div className="icon-container">
                      <FaHandsHoldingChild  size={32}/>
                      </div>
                    </div>
                    <p className="card-text mc">
                    At ALFAA, we provide these adults with compassionate care and support, services specifically designed for these autistic adults for their overall wellbeing and ensuring they get personalised attention and additional assistance if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
