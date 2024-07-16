import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team";
import Donation from "./components/Donation/Donation";
import DonationDetails from "./components/Donation/DonationDetails";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Events from "./components/Events/Events"
import EventDetails from "./components/Events/EventDetails"
import ContactUs from "./components/Contact/ContactUs"
import DonateNow from "./components/Donation/DonateNow";
import Event from "./components/Events/Events";
import Trusty from "./components/Trusty";
import AutismAwareness from "./components/Blog/AutismAwareness";
import VoteCasting from "./components/Blog/VoteCasting";
import EnvironmentDay from "./components/Blog/EnvironmentDay";
import PragnaTrustVisit from "./components/Blog/PragnaTrustVisit";
import NewCampusVisiting from "./components/Blog/NewCampusVisiting";
import FarewellDay from "./components/Blog/FarewellDay";
import YogaDay from "./components/Blog/YogaDay";
import BloodTest from "./components/Blog/BloodTest";
import MembersMeeting from "./components/Blog/BoardMemberMeeting";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/trusty" element={<Trusty />} />
        <Route path="/donations" element={<Donation />} />
        <Route path="/donationdetails" element={<DonationDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/events" element={<Event />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/donateNow" element={<DonateNow />} />
        <Route path="/world-autism-awareness-day" element={<AutismAwareness />} />
        <Route path="/vote-casting" element={<VoteCasting/>} />
        <Route path="/world-environment-day" element={<EnvironmentDay/>} />
        <Route path="/99th-nt-board-members-meeting" element={<MembersMeeting/>} />
        <Route path="/new-campus-site-visit" element={<NewCampusVisiting />} />
        <Route path="/internship-farewell-day" element={<FarewellDay />} />
        <Route path="/yoga-day" element={<YogaDay/>} />
        <Route path="/pragna-trust-visit" element={<PragnaTrustVisit/>} />
        <Route path="/blood-test" element={<BloodTest/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
