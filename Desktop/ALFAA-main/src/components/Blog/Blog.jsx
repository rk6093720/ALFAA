// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import HeroSection from "../common/HeroSection";
import "./Blog.css";
import blog1 from "../../assets/blog-image1.png";
import blog3 from "../../assets/blog-image3.png";

const Blog = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleOpen = (index) => {
    setSelectedBlogIndex(index);
  };

  // eslint-disable-next-line no-unused-vars
  const handleClose = () => {
    setSelectedBlogIndex(null);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePrev = () => {
    setSelectedBlogIndex((prevIndex) =>
      // eslint-disable-next-line no-undef
      prevIndex > 0 ? prevIndex - 1 : blogs.length - 1
    );
  };

  // eslint-disable-next-line no-unused-vars
  const handleNext = () => {
    setSelectedBlogIndex((prevIndex) =>
      // eslint-disable-next-line no-undef
      prevIndex < blogs.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection subHead="Home / Blog" mainHead="Blogs" />
      
     
      <div className="our-poorex-container container mt-5">
        <div className="row align-items-center">
          <div className="left-side animated tpfadeLeft col-lg-6 col-md-12">
            <div className="main-img position-relative pl-5">
              <img src={blog1} alt="" className="abouimg1" />
            </div>
          </div>
          <div className="right-side animated fadeInRight col-lg-6 col-md-12">
            <div className="about_section_title">
              <div className="as_text">
                <p>
                  As we step into the vibrant months of April, May, and June,
                  our ALFAA community is abuzz with excitement. April month
                  marks Autism acceptance. It is a time to move beyond mere
                  awareness and embrace acceptance. It is a period dedicated to
                  educating the community, promoting inclusivity, and celebrating
                  the unique perspectives and talents of individuals with autism.
                  As we progress, we are focusing more on strengthening the systems
                  required to support the growth and development of each child,
                  especially those with autism. Youth play a crucial role in bringing
                  about change in society, and at ALFAA, we believe that involving
                  and engaging young talent in interactions with our students with
                  autism is a key step in fostering community awareness and acceptance.
                  As part of this initiative, we have continued our multidisciplinary
                  internship program, which we started last year, welcoming students
                  from Christ University, UPES, and SRM Institute of Technology.
                  Additionally, we had the opportunity to interact with grade 12
                  students from National Public School and Chrysalis High School,
                  engaging them in community work and emphasizing the importance
                  of autism acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="our-poorex-container container mt-5">
        <div className="row align-items-center">
          <div className="left-side animated tpfadeLeft col-lg-6 col-md-12">
            <div className="main-img position-relative pl-5">
              <img src={blog3} alt="" className="abouimg1" />
            </div>
          </div>
          <div className="right-side animated fadeInRight col-lg-6 col-md-12">
            <div className="about_section_title">
              <div className="as_text">
                <p>
                  ALFAA is also progressing in its efforts to build a larger
                  residential campus. In retrospect, our journey through the
                  months of April, May, and June has been incredibly enriching
                  and inspiring. I invite you to read about our activities and
                  see the positive impact we had on our community. Together, let
                  us acknowledge the strides we, all our readers, including our
                  staff, students, parents, volunteers, and well-wishers, are
                  making toward greater autism awareness and acceptance.
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <p>Best Regards</p>
                  <p>Tejo Prasanna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
