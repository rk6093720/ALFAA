import React, { useEffect } from "react";
import HeroSection from "./common/HeroSection";
import TeamMember from "./common/TeamMember";
import np1 from "../assets/np/1np.png";
import np2 from "../assets/np/2np.png";
import np3 from "../assets/np/3np.png";
import np4 from "../assets/np/4np.png";
import np5 from "../assets/np/5np.png";
import np6 from "../assets/np/6np.png";
import np7 from "../assets/np/7np.png";
import np8 from "../assets/np/8np.png";
import np9 from "../assets/np/9np.png";
import np10 from "../assets/np/10np.png";
import np11 from "../assets/np/11np.png";
import np12 from "../assets/np/12np.png";
import np13 from "../assets/np/13np.png";
import np14 from "../assets/np/14np.png";
import np15 from "../assets/np/15np.png";
import tj from "../assets/1e.jpg";
import ks from "../assets/2e.jpg";
import ds from "../assets/3e.jpg";
import usa from "../assets/Usha_Kini.jpeg";
import mg from "../assets/mg.jpeg";
import rb from "../assets/Ruby_Singh.jpeg";
const Team = ({ subHead, mainHead }) => {
  const techmembers = [
    {
      src: rb,
      name: "Mrs. Ruby Singh",
      role: "Managing Director & Founder Trustee",
    },
    {
      src: tj,
      name: "Mrs. Tejo Prasanna",
      role: "Academic Director",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Surendra Kumar",
      role: "Special Educator",
    },
  
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Ravinder Kumar",
      role: "Special Educator (Incharge AGRP 2)",
    },
    {
      src: ds,
      name: "Mr. Devinder Singh",
      role: "Senior Special Educator ( Supervisor-Residential Project)"
    },
    {
      src: ks,
      name: "Mr. Kashmir Singh",
      role: "Principal and Sr Special Educator",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Rajesh Kumar Goswami",
      role: "Special Educator (INCHARGE OF AGRP)",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Yagvendra Singh",
      role: "Special Educator",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: " Mr. Stephen A",
      role: "Music Teacher",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mrs. Piyali Nag",
      role: "Occupational Therapist",
    },
  ];
  const nontechmembers = [
    {
      src: np1,
      name: "Col. Praween Kumar Singh",
      role: "ADMINISTRATION",
    },
    {
      src:np2,
      name: "Mr. Manjunath.H",
      role: "ADMINCORDINATURE",
    },
    {
      src: np3,
      name: "Mrs. ManjeetKaur",
      role: "Hostel Warden",
    },
  
    {
      src: np4,
      name: "Mr. Sachin Pal",
      role: "Driver cum TA",
    },
    {
      src: np5,
      name: "Mrs. Nathiya R",
      role: "Ayah & TA"
    },
    {
      src: np6,
      name: "Mr. Dilip Kumar Behera",
      role: "Ayah/Helper",
    },
    {
      src: np7,
      name: "Mr. Asit Mohalik",
      role: "Ayah/Helper",
    },
    {
      src: np8,
      name: "Mrs. Vijayalakshmi",
      role: "Ayah",
    },
    {
      src: np9,
      name: "Mrs. Chaitra",
      role: "Ayah/Helper",
    },
    {
      src: np10,
      name: "Mr. Gopal Bahadur(Geeta)",
      role: "Maid",
    },
    {
      src: np11,
      name: "Mr. Basavaraju",
      role: "Caretaker",
    },
    {
      src: np12,
      name: "Mrs. Sujatha",
      role: "Maid",
    },
    {
      src: np13,
      name: "Mr. Abhilash SR",
      role: "Caretaker",
    },
    {
      src: np14,
      name: "Mr. Suryakant Mahalik",
      role: "Cook",
    },
    {
      src: np15,
      name: "Mr. Sudam Jena",
      role: "Caretaker",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Volunteer" mainHead="Technical Team Member"/>
      <div className="my-5">
        <TeamMember members={techmembers} />
      </div>
      <HeroSection subHead="Home / Volunteer" mainHead="Non-Teaching Staff" />
      <div className="my-5">
        <TeamMember members={nontechmembers} />
      </div>
    </>
  );
};
export default Team;
