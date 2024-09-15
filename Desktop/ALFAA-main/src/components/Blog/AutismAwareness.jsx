import React from "react";
import BlogDetails from "./BlogDetails";
import img from "../../assets/blog-image2.png";
const AutismAwareness = () => {
  return (
    <>
      <BlogDetails
        date="04 April"
        image={img}
        header="Autism Awareness"
        description1="On World Autism Awareness Day,
ALFAA held various educational
events to raise awareness about
autism spectrum disorder (ASD).
Experts conducted a seminar to
dispel common misconceptions
about ASD, and residents shared
their own experiences. The events
included interactive workshops, art
exhibitions, and informational
booths that provided resources and
support to families affected by
autism. Students and parents shared
their thoughts and ideas as well.
Through these efforts, ALFAA aims to
increase awareness and promote
acceptance, advocating for a more
inclusive society that values and
supports individuals with autism."
      />
    </>
  );
};
export default AutismAwareness;
