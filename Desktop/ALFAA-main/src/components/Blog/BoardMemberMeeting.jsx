import React from "react";
import BlogDetails from "./BlogDetails";
import img from "../../assets/blog-image12.png";
const MembersMeeting = () => {
  return (
    <>
      <BlogDetails
        date="29 June"
        image={img}
        header="99th NT Board
Members Meeting"
        description1="Founder Mrs Ruby Singh attended the 99th NT
Board Members meeting on June 29th,
participating in strategic discussions and
decision-making processes.As we conclude this edition of our
newsletter, we extend our heartfelt
gratitude to everyone who supports
our mission. Your dedication and involvement make a profound difference in the
lives of our students, enabling us to build a brighter future where every child can
reach their full potential. The support we receive allows us to provide enriching
educational experiences, personalized care, and opportunities that empower our
students to thrive academically and personally."
        description2="Stay connected with us for more exciting updates and inspiring stories that
showcase the tangible impact of your support. Whether it's through donations,
volunteering, or advocacy, your contributions create pathways to success for our
students and foster a sense of community that is essential to our mission.
Thank you for being an integral part of our community and for your continued
commitment to our cause. Together, let's keep striving for excellence in
education and making a positive, lasting impact in the lives of those we serve.
Your support is not just appreciated; it's fundamental to our ability to fulfill our
mission and create a brighter future for our students and their famililies."
      />
    </>
  );
};
export default MembersMeeting;
