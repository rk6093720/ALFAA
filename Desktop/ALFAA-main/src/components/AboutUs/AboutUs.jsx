import  { useEffect } from "react";
import HeroSection from "../common/HeroSection";

import "./AboutUs.css";
import StartDonate from "../common/StartDonate";
import Testimonial from "../common/Testimonial/Testimonial";
import TeamMember from "../common/TeamMember";
import about1 from "../../assets/g6.jpg";
import about2 from "../../assets/ab2.jpeg"
import e1 from "../../assets/1e.jpg"
import e2 from "../../assets/2e.jpg"
import e3 from "../../assets/3e.jpg"
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g15 from "../../assets/g15.jpg";
import AboutTimeline from "./AboutTimeline";
import { FaArrowRight } from "react-icons/fa";
import { Carousel, CarouselItem } from "react-bootstrap";
const AboutUs = () => {
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
  const bannerImage =[
    {src:g1},
    {src:g2},
    {src:g3},
    {src:g4},
    {src:g15}
  ]
  return (
    <div className="homepage-container">
      <Carousel>
        {bannerImage.map((item, index) => (
          <CarouselItem key={index}>
            <img
              src={item.src}
              style={{ width: "100%",height:"500px", padding: "2px" }}
              alt={`Image${index + 1}`}
            />
          </CarouselItem>
        ))}
      </Carousel>
      <HeroSection subHead="Home/About Us" mainHead="About Us" />
      <div className="our-poorex-container-area">
        <div className="our-poorex-container container">
          <div className="left-side animated tpfadeLeft col-xl-4 col-md-5">
            <div className="main-img position-relative">
              <img src={about1} alt="" className="abouimg1" />
            </div>
          </div>
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            <div className="about_section_title pb-25">
              <span
                className="ap_subtitle"
                style={{ color: "var(--tp-common-orange)" }}
              >
                About Alfaa
              </span>
              <h4
                className="as_title"
                style={{ color: "var(--tp-common-orange)" }}
              >
                Assisted Living for Autistic Adults
              </h4>
            </div>
            <div className="about_section_title">
              <div className="as_text">
                <p style={{ color: "var(--tp-common-orange)" }}>
                  Assisted Living For Autistic Adults (ALFAA) was founded in
                  2009 with the primary objective of providing good quality
                  living conditions and facilities for autistic adults in India.
                </p>
              </div>
              <div className="as_text">
                <p style={{ color: "var(--tp-common-orange)" }}>
                  There are several organizations in India that provide support
                  and various services to people with autism. However these
                  organizations do not provide residential facilities
                  exclusively for autistic adults.
                </p>
              </div>
              <div
                className="as_text"
                style={{ color: "var(--tp-common-orange)" }}
              >
                <p style={{ color: "var(--tp-common-orange)" }}>
                  ALFAA aims to fill this need by providing good quality
                  short-term and long-term residential facilities, for the care
                  and protection of people with autism spectrum disorder, when
                  the parents get old and even in the event of death of the
                  parent(s) or guardian.
                </p>
              </div>
              <div className="as_text">
                <p style={{ color: "var(--tp-common-orange)" }}>
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
              <h4 className="as_title" style={{ color: "var(--main-color)" }}>
                The Plan
              </h4>
              <div className="as_text">
                <p style={{ color: "var(--main-color)" }}>
                  Founded in 2009, Assisted Living For Autistic Adults ALFAA is
                  dedicated to enhancing the living conditions of autistic
                  adults in India. Over the next three years, ALFAA plans to
                  consolidate its mission.
                </p>
              </div>
              <div className="as_text">
                <p style={{ color: "var(--main-color)" }}>
                  By focusing on exclusive residential facilities for autistic
                  adults, ALFAA aims to establish itself as a haven for those in
                  need of care due to ageing parents or guardians. The
                  organization also intends to expand its counselling services
                  for individuals with autism spectrum disorder and their
                  families.
                </p>
              </div>
              <div className="as_text">
                <p style={{ color: "var(--main-color)" }}>
                  By actively advocating for autism awareness, ALFAA will
                  enhance its role as a prominent voice for the community.
                  Furthermore, the proposed residential campus, situated near
                  Bangalore, will not only provide a secure and enriching
                  environment but also generate job opportunities for nearby
                  villages.
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
        <h4 className="as_title mb-5 text-violet">
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
      {/* <BrandSlider /> */}
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
