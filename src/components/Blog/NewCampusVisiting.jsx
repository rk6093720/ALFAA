import React from "react";
import BlogDetails from "./BlogDetails";
import img from "../../assets/blog-image8.png";
const NewCampusVisiting = () => {
  return (
    <>
      <BlogDetails
        date="22 May"
        image={img}
        header="New Campus Site Visit"
        description1="ALFAA students visited their new campus site, learning
about upcoming facilities such as a swimming pool, play
area, upgraded hostels, and a better-equipped
school,etc, all still under construction. They also
checked on the saplings they planted a few days ago on
World Environment Day."
      />
    </>
  );
};
export default NewCampusVisiting;
