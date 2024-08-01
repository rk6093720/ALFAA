import React, { useEffect } from "react";
import HeroSection from "./common/HeroSection";
import TeamMember from "./common/TeamMember";
import tj from "../assets/1e.jpg";
import ks from "../assets/2e.jpg";
import ds from "../assets/3e.jpg";
import usa from "../assets/Usha_Kini.jpeg";
import mg from "../assets/mg.jpeg";
const Trusty = ({ subHead, mainHead }) => {
  const members = [
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Col. PK Singh",
      role: "Board of directors",
    },
    {
      src: tj,
      name: "Mrs. Tejo Prasanna",
      role: "Board of directors",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Rajat Satpathy",
      role: "Board of directors",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Gouri Shankar. G",
      role: "Board of directors",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Dinesh Pandey",
      role: "Board of directors",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. P. Balachandra",
      role: "Board of directors",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Anil Kumar",
      role: "Board of directors",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Harshit Singh",
      role: "Next Line Trustees",
    },
    {
      src:ks,
      name: "Mr. Kashmir Singh",
      role: "Next Line Trustees",
    },
    {
      src: ds,
      name: "Mr. Devinder Singh",
      role: "Next Line Trustees",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mrs. Manjit Kaur",
      role: "Next Line Trustees",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Ms. Kusum Pai",
      role: "Advisory Board Members",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Pawan Singhal",
      role: "Advisory Board Members",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Jalaja Narayanan",
      role: "Advisory Board Members",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Mk Singh",
      role: "Advisory Board Members",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Lamboder Ray",
      role: "Advisory Board Members",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Tarun Kashyap",
      role: "Board Of Siblings",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Ms. Ankita Kemkar",
      role: "Board Of Siblings",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Ms. Diya Jeevanth",
      role: "Board Of Siblings",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Saatvik Gudla",
      role: "Board Of Siblings",
    },
    {
      src:tj,
      name: "Mrs. Tejo Prasanna",
      role: "Supported Decision Maker",
    },
    {
      src: mg,
      name: "Mrs. Madhurima Ghose",
      role: "Supported Decision Maker",
    },
    {
      src: usa,
      name: "Mrs. Usha Kini",
      role: "Supported Decision Maker",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Ravinder Kumar",
      role: "Supported Decision Maker",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Sunil Anand",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "M/S. Econship Tech Pvt Ltd",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Ashok Hissaria",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Dr. Satya Gupta",
      role: "Our Prominent Patrons"
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Anup Joseph",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Mr. Rajesh Mongia",
      role: "Our Prominent Patrons",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Trusty" mainHead="Trustees" />
      <div className="my-5">
        <TeamMember members={members} />
      </div>
    </>
  );
};
export default Trusty;
