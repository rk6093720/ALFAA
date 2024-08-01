import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";

import "./AboutUs.css";
import BrandSlider from "./BrandSlider";
import StartDonate from "../common/StartDonate";
import Testimonial from "../common/Testimonial/Testimonial";
import TeamMember from "../common/TeamMember";
import DiscoverMore from "../common/DiscoverMore";
import about1 from "../../assets/g6.jpg";
import about2 from "../../assets/ab2.jpeg"
import e1 from "../../assets/1e.jpg"
import e2 from "../../assets/2e.jpg"
import e3 from "../../assets/3e.jpg"

import AboutTimeline from "./AboutTimeline";
import { FaArrowRight } from "react-icons/fa";
import { Grid } from "@mui/material";
const AboutUs = ({ subHead, mainHead }) => {
  const members = [
    {
      src: e1,
      name: "Mrs. Tejo Prasanna",
      role: "Academic Director",
    },
    {
      src: e2,
      name: "Mr. Kashmir Singh",
      role: "Principal and Sr Special Educator",
    },
    {
      src: e3,
      name: "Mr. Devinder Singh",
      role: "Senior Special Educator ( Supervisor-Residential Project)",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage-container">
      <HeroSection subHead="Home / About Us" mainHead="About Us" />
      <div className="our-poorex-container-area">
        <div className="our-poorex-container container">
          <div className="left-side animated tpfadeLeft col-xl-4 col-md-5">
            <div className="main-img position-relative">
              <img src={about1} alt="" className="abouimg1" />
            </div>
          </div>
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            <div className="about_section_title pb-25">
              <span className="ap_subtitle">About Alfaa</span>
              <h4 className="as_title">Assisted Living for Autistic Adults</h4>
            </div>
            <div className="about_section_title">
              <div className="as_text">
                <p>
                  Assisted Living For Autistic Adults (ALFAA) was founded in
                  2009 with the primary objective of providing good quality
                  living conditions and facilities for autistic adults in India.
                </p>
              </div>
              <div className="as_text">
                <p>
                  There are several organizations in India that provide support
                  and various services to people with autism. However these
                  organizations do not provide residential facilities
                  exclusively for autistic adults.
                </p>
              </div>
              <div className="as_text">
                <p>
                  ALFAA aims to fill this need by providing good quality
                  short-term and long-term residential facilities, for the care
                  and protection of people with autism spectrum disorder, when
                  the parents get old and even in the event of death of the
                  parent(s) or guardian.
                </p>
              </div>
              <div className="as_text">
                <p>
                  ALFAA also provides counselling to people with autism spectrum
                  disorder and their families; serves as the voice for autism
                  and promotes awareness of autism in society.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-poorex-container2 container mt-4">
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            <div className="about_section_title">
              <h4 className="as_title">The Plan</h4>
              <div className="as_text">
                <p>
                Founded in 2009, Assisted Living For Autistic Adults ALFAA is dedicated to enhancing the living conditions of autistic adults in India. Over the next three years, ALFAA plans to consolidate its mission.
                </p>
              </div>
              <div className="as_text">
                <p>
                By focusing on exclusive residential facilities for autistic adults, ALFAA aims to establish itself as a haven for those in need of care due to ageing parents or guardians. The organization also intends to expand its counselling services for individuals with autism spectrum disorder and their families. 
                </p>
              </div>
              <div className="as_text">
                <p>
                By actively advocating for autism awareness, ALFAA will enhance its role as a prominent voice for the community. Furthermore, the proposed residential campus, situated near Bangalore, will not only provide a secure and enriching environment but also generate job opportunities for nearby villages.
                </p>
              </div>
            </div>
          </div>
          <div className="left-side animated tpfadeLeft col-xl-4 col-md-5">
            <div className="main-img position-relative">
              <img src={about2} alt="" className="abouimg1" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 alfaa-desire">
        <h4 className="as_title mb-5 text-white">
        ALFAA is driven with the desire to give
        </h4>
        <ul className="text-white">
          <li>
            <FaArrowRight style={{ marginRight: "8px" }} /> Respite to Mothers
            of ASD teenagers
          </li>
          <li>
            <FaArrowRight style={{ marginRight: "8px" }} /> To help TEENAGERS
            with ASD to have their own environment without parential
            intervention
          </li>
          <li>
            <FaArrowRight style={{ marginRight: "8px" }} /> To find a workable
            BEHAVIOUR MANAGEMENT program for ASD teenagers
          </li>
          <li>
            <FaArrowRight style={{ marginRight: "8px" }} /> To create a Life
            care and Future HOME for ASD individuals (Adults only )
          </li>
          <li>
            <FaArrowRight style={{ marginRight: "8px" }} /> To give HOPE to
            parents with ASD Children
          </li>
          <li>
            <FaArrowRight style={{ marginRight: "8px" }} /> Founder Trustee came
            together to set up ALFAA (ASSISTED LIVING FOR AUTISTIC ADULTS ) in
            November 2009
          </li>
        </ul>
      </div>
      <AboutTimeline />
      <BrandSlider />
      <StartDonate />
      <Testimonial />
      <div className="my-5">
        <div className="about_section_title d-flex align-items-center justify-content-center flex-column my-5">
          <span className="ap_subtitle">OUR TEAM</span>
          <h4 className="as_title">Meet With Our Expert</h4>
        </div>
        <div>
          <TeamMember members={members} />
        </div>
      </div>
     
    </div>
  );
};

export default AboutUs;
