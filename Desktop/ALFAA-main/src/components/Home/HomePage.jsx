// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./HomePage.css";
import LandingSection from "./LandingSection/LandingSection";
import AboutPoorex from "./AboutPoorex/AboutPoorex";
// eslint-disable-next-line no-unused-vars
import HelpThePeople from "./HelpThePeople/HelpThePeople";
import Gallery from "./Gallery/Gallery";
import Testimonial from "../common/Testimonial/Testimonial";
import EventSection from "./EventSection";
import StartDonate from "../common/StartDonate";
import DiscoverMore from "../common/DiscoverMore";
import ProvidingUrgent from "./ProvidingUrgent/ProvidingUrgent";
import OurFacility from "./OurFacility/OurFacility";
import WhatisAlfaa from "./WhatisAlfaaa/WhatisAlfaa";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="homepage-container">
            <LandingSection />
            <AboutPoorex />
            {/* <HelpThePeople /> */}
            <Gallery />
            <OurFacility />
            <Testimonial />
            <EventSection />
            <StartDonate />
            <WhatisAlfaa />
            <ProvidingUrgent />
            {/* <OurBlog /> */}
            <DiscoverMore />
        </div>
    );
};

export default HomePage;
