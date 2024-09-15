import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Fade } from "@mui/material";
import { useEffect } from "react";
import "./AboutUs.css"; // Move CSS rules here

const AboutTimeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item, i) => {
      item.style.opacity = 0;
      setTimeout(() => {
        item.style.transition = `opacity 0.5s ease-in-out ${i * 0.2}s`;
        item.style.opacity = 1;
      }, 100);
    });
  }, []);

  return (
    <div className="px-5 my-5 about-timeline-container">
      <div className="mb-5">
        <h4 className="text-center as_title">The Projects Started</h4>
      </div>
      <Timeline position="alternate" sx={{ padding: "6px 100px" }}>
        {timelineData.map((item, index) => (
          <Fade in={true} timeout={800 + index * 200} key={item.year}>
            <TimelineItem className="timeline-item">
              <TimelineOppositeContent
                sx={{
                  color: "#361455",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: item.color,
                    color: item.color,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: item.color,
                      color: "#fff",
                      transform: "scale(1.2)",
                    },
                  }}
                />
                <TimelineConnector sx={{ transition: "height 0.5s ease" }} />
              </TimelineSeparator>
              <TimelineContent
                sx={{ color: "#000", fontFamily: '"Manrope", sans-serif' }}
              >
                {item.description}
              </TimelineContent>
            </TimelineItem>
          </Fade>
        ))}
      </Timeline>
    </div>
  );
};

const timelineData = [
  {
    year: "2010",
    description: "Awareness Workshops and Parent Empowerment Programs",
    color: "#361455",
  },
  {
    year: "2012",
    description: "Started OPTIMA Day Care & Respite Program on Weekends",
    color: "#fe7f4c",
  },
  {
    year: "2013",
    description: "OPTIMA Day Care and Respite Care Full Day Program",
    color: "#361455",
  },
  {
    year: "2018",
    description:
      "Akash Ganga Residential Project with first 6 Adults was Started in October",
    color: "#fe7f4c",
  },
  {
    year: "2020",
    description:
      "2nd (New) Akash Ganga Residential Project Was started during COVID.",
    color: "#361455",
  },
  {
    year: "2023",
    description:
      "Started the Niramaya Health Insurance Enrollment Kiosk at Nimhans to help and support Parents of IDD children.",
    color: "#fe7f4c",
  },
];

export default AboutTimeline;
