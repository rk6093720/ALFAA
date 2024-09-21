// eslint-disable-next-line no-unused-vars
import React from "react";
import BlogDetails from "./BlogDetails";
import img from "../../assets/blog-image5.png";
const EnvironmentDay = () => {
  return (
    <>
      <BlogDetails
        date="05 May"
        image={img}
        header="World Environment Day"
        description1="ALFAA marked World Environment Day with a series
of engaging and educational activities at their new
campus site. The celebration commenced with
students and staff planting trees, symbolizing their
commitment to environmental conservation. In
addition to this hands-on experience, students
showcased their creativity by drawing colorful
posters that depicted the significance of
preserving our planet."
        description2="To further enhance their understanding, they
placed pots of plants on the school roof and the
hostel balconies, creating lush green spaces that
promote a healthier environment. The day's
activities were not only about planting but also
about education; students learned about the
purpose of World Environment Day, the critical role
of nature, and the necessity of environmental care
for human survival. This immersive experience
instilled a sense of responsibility and awareness
about environmental stewardship among the
students."
      />
    </>
  );
};
export default EnvironmentDay;
