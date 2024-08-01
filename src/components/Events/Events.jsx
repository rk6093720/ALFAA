import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";
import EventCard from "../common/EventCards/EventCards";
import blog1 from "../../assets/blog-image1.png";
import blog2 from "../../assets/blog-image2.png";
import blog3 from "../../assets/blog-image3.png";
import blog4 from "../../assets/blog-image4.png";
import blog5 from "../../assets/blog-image5.png";
import blog6 from "../../assets/blog-image6.png";
import blog7 from "../../assets/blog-image7.png";
import blog8 from "../../assets/blog-image8.png";
import blog9 from "../../assets/blog-image9.png";
import blog10 from "../../assets/blog-image10.png";
import blog11 from "../../assets/blog-image11.png";
import blog12 from "../../assets/blog-image12.png";
import hl from "../../assets/hl.jpg";
import ad from "../../assets/ad.jpg";
import rp from "../../assets/26jan.jpeg";

import wd from "../../assets/wispad.jpg";

const Event = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const eventCards = [
    {
      imgSrc: hl,
      header: "Holi Celebration",
      link: "#",
      date: "24",
      month: "March",
    },
    {
      imgSrc: ad,
      header: "Ayodhya Celebration",
      link: "#",
      date: "22",
      month: "January",
    },
    {
      imgSrc: rp,
      header: "Republic Day celebration at campus site",
      link: "#",
      date: "26",
      month: "January",
    },
    {
      imgSrc: wd,
      header: "WISPAD Workshop",
      link: "#",
      date: "18",
      month: "March",
    },
    {
      imgSrc: blog4,
      header: "World Autism Awareness day",
      link: "#",
      date: "02",
      month: "April",
    },
    {
      imgSrc: blog6,
      header: "Vote Casting",
      link: "#",
      date: "26",
      month: "April",
    },
    {
      imgSrc: blog7,
      header: "World Environment Day",
      link: "#",
      date: "05",
      month: "May",
    },
    {
      imgSrc: blog12,
      header: "99th NT Board Members Meeting",
      link: "#",
      date: "29",
      month: "June",
    },
    {
      imgSrc: blog8,
      header: "New Campus Site Visit",
      link: "#",
      date: "22",
      month: "May",
    },
    {
      imgSrc: blog9,
      header: "Internship Farewell Day",
      link: "#",
      date: "07",
      month: "June",
    },
    {
      imgSrc: blog10,
      header: "Yoga Day",
      link: "#",
      date: "21",
      month: "June",
    },
    {
      imgSrc: blog5,
      header: "Pragna Trust Visit",
      link: "#",
      date: "20",
      month: "April",
    },
    {
      imgSrc: blog11,
      header: "Blood Test",
      link: "#",
      date: "23",
      month: "June",
    },
  ];

  const sortedEventCards = eventCards.sort((a, b) => {
    const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateA = new Date(`2023 ${a.month} ${a.date}`);
    const dateB = new Date(`2023 ${b.month} ${b.date}`);

    return dateA - dateB;
  });

  return (
    <>
      <HeroSection subHead="Home / Event" mainHead="Events" />
      <EventCard eventCards={sortedEventCards} />
    </>
  );
};

export default Event;
