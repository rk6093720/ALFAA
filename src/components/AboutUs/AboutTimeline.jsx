import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function AboutTimeline() {
  return (
    <div className="px-5 my-5 about-timeline-container">
      <div className="mb-5">
        <h4 className="text-center as_title">The Projects Started</h4>
      </div>
      <Timeline position="alternate" sx={{ padding: "6px 100px" }}>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "#361455" }}>
            <b>2010</b>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: "#361455", color: "#361455" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ color: "#000000", fontFamily:'"Manrope", sans-serif'  }}>
          Awareness Workshops and Parent Empowerment Programs
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "#361455" }}>
            <b>2012</b>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: "#fe7f4c", color: "#fe7f4c" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ color: "#000000" , fontFamily:'"Manrope", sans-serif' }}>
            Started OPTIMA Day Care & Respite Program on Weekends
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "#361455" }}>
            <b>2013</b>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: "#361455", color: "#361455" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ color: "#000000", fontFamily:'"Manrope", sans-serif'  }}>
            OPTIMA Day care and  Respite Care Full Day Program
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "#361455" }}>
            <b>2018</b>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: "#fe7f4c", color: "#fe7f4c" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ color: "#000000" , fontFamily:'"Manrope", sans-serif' }}>
            Akash Ganga Residential Project with first 6 Adults was Started in
            October
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "#361455" }}>
            <b>2020</b>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: "#361455", color: "#361455" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ color: "#000000" , fontFamily:'"Manrope", sans-serif' }}>
            2nd (New) Akash Ganga Resedential Project Was started during COVID.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ color: "#361455" }}>
            <b>2023</b>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: "#fe7f4c", color: "#fe7f4c" }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ color: "#000000", fontFamily:'"Manrope", sans-serif' }}>
            Started the Niramaya Health Insurance Enrollment Kiosk at Nimhans to
            help and support Parents of IDD children.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
