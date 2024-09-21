/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import HeroSection from "./common/HeroSection";
import TeamMember from "./common/TeamMember";
import tj from "../assets/1e.jpg";
import ks from "../assets/2e.jpg";
import ds from "../assets/3e.jpg";
import usa from "../assets/Usha_Kini.jpeg";
import mg from "../assets/mg.jpeg";
import np1 from "../assets/np/1np.png";
// eslint-disable-next-line no-unused-vars
const Trusty = ({ subHead, mainHead }) => {
  const members = [
    {
      src: np1,
      name: "Mr. Col. PK Singh",
      role: "Board of directors",
    },
    {
      src: tj,
      name: "Mrs. Tejo Prasanna",
      role: "Board of directors",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Rajat Satpathy",
      role: "Board of directors",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Gouri Shankar. G",
      role: "Board of directors",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Dinesh Pandey",
      role: "Board of directors",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. P. Balachandra",
      role: "Board of directors",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Anil Kumar",
      role: "Board of directors",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
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
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxVGM9-xU4qiUGoXaUttWHiCR_WthKNtAwx7EGxjZvKGUvd-VhXE_wqrXo1aFLH9WzN0&usqp=CAU",
      name: "Mrs. Manjit Kaur",
      role: "Next Line Trustees",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxVGM9-xU4qiUGoXaUttWHiCR_WthKNtAwx7EGxjZvKGUvd-VhXE_wqrXo1aFLH9WzN0&usqp=CAU",
      name: "Ms. Kusum Pai",
      role: "Advisory Board Members",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Pawan Singhal",
      role: "Advisory Board Members",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Jalaja Narayanan",
      role: "Advisory Board Members",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Mk Singh",
      role: "Advisory Board Members",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Lamboder Ray",
      role: "Advisory Board Members",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Tarun Kashyap",
      role: "Board Of Siblings",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxVGM9-xU4qiUGoXaUttWHiCR_WthKNtAwx7EGxjZvKGUvd-VhXE_wqrXo1aFLH9WzN0&usqp=CAU",
      name: "Ms. Ankita Kemkar",
      role: "Board Of Siblings",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxVGM9-xU4qiUGoXaUttWHiCR_WthKNtAwx7EGxjZvKGUvd-VhXE_wqrXo1aFLH9WzN0&usqp=CAU",
      name: "Ms. Diya Jeevanth",
      role: "Board Of Siblings",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Saatvik Gudla",
      role: "Board Of Siblings",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxVGM9-xU4qiUGoXaUttWHiCR_WthKNtAwx7EGxjZvKGUvd-VhXE_wqrXo1aFLH9WzN0&usqp=CAU",
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
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Ravinder Kumar",
      role: "Supported Decision Maker",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Sunil Anand",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/256/53/53176.png",
      name: "M/S. Econship Tech Pvt Ltd",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Ashok Hissaria",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Dr. Satya Gupta",
      role: "Our Prominent Patrons"
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
      name: "Mr. Anup Joseph",
      role: "Our Prominent Patrons",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/014/608/856/non_2x/man-avatar-icon-flat-vector.jpg",
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
