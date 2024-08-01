import React from 'react';
import EventCard from '../common/EventCards/EventCards';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.png'
const eventCards = [
  {
    imgSrc:img3,

    header: "Kargil Vijay Diwas ",
    link: "#",
    date: "20",
    month: "July",
  },
    {
      
        imgSrc:img1,
  
        header: "Vijay Divash",
        link: "#",
        date: "26",
        month: "July",
      },
      {
        imgSrc:img2,
  
        header: "Independence Day",
        link: "#",
        date: "15",
        month: "Aug",
      },
     
];

const EventSection = () => {
  return (
    <div className='my-5'>
      <div className="about_section_title d-flex align-items-center justify-content-center flex-column">
        <span className="as_subtitle">FUTURE EVENTS</span>
        <h4 className="as_title">Latest Upcoming Events</h4>
      </div>

      <EventCard eventCards={eventCards} />
    </div>
  );
};

export default EventSection;
