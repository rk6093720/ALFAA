import React from "react";
import BlogDetails from "./BlogDetails";
import img from "../../assets/blog-image10.png";
const YogaDay = () => {
  return (
    <>
      <BlogDetails
        date="21 June"
        image={img}
        header="Yoga Day"
        description1="ALFAA celebrated Yoga Day at its new campus site
with enthusiasm. Students gathered under the
guidance of their beloved school principal, Kashmir
Sir, to practice and learn various yoga positions."
description2="They had traveled to the new location and set up
their mats eagerly. Staff members joined in,
offering encouragement and assistance during the
yoga session. After the invigorating practice,
everyone enjoyed a wholesome lunch together and
explored the new campus grounds. The day was not only refreshing but also promoted
physical well-being and relaxation among the
ALFAA community, fostering a sense of unity and
positivity as they embraced both the benefits of
yoga and their new campus environment."
      />
    </>
  );
};
export default YogaDay;
