import React, { useEffect, useState } from "react";
import HeroSection from "../common/HeroSection";
import "./Blog.css";
import { Link } from "react-router-dom";
import { AiOutlineTag, AiOutlineClose } from "react-icons/ai";
import { FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiPlayReverseLargeFill } from "react-icons/ri";
import { RiPlayLargeFill } from "react-icons/ri";
import blog1 from "../../assets/blog-image1.png";
import blog2 from "../../assets/blog-image2.png";
import blog3 from "../../assets/blog-image3.png";
import blog4 from "../../assets/blog-image4.png";
import blog5 from "../../assets/blog-image5.png";
import blog6 from "../../assets/blog-image6.png";
import blog7 from "../../assets/blog-image7.png";
import blog8 from "../../assets/blog-image8.png";
import blog9 from "../../assets/blog-image9.png";
import blog10 from "../../assets/blog-image10.png";
import blog11 from "../../assets/blog-image11.png";
import blog12 from "../../assets/blog-image12.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image:blog4,
      tag: "FOOD",
      title: "World Autism Awareness day",
      date: "April 02, 2024",
    },
    
    {
      id: 3,
      image:blog6,
      tag: "FOOD",
      title: "Vote Casting",
      date: "April 26, 2024",
    },
    {
      id: 9,
      image:blog7,
      tag: "FOOD",
      title: "World Environment Day",
      date: "MAY 05, 2024",
    },
    {
      id: 4,
      image:blog12,
      tag: "FOOD",
      title: "99th NT Board Members Meeting",
      date: "JUNE 29, 2024",
    },
    {
      id: 5,
      image:blog8,
      tag: "FOOD",
      title: "New Campus Site Visit",
      date: "MAY 22, 2024",
    },
    {
      id: 6,
      image:blog9,
      tag: "FOOD",
      title: "Internship Farewell Day",
      date: "JUNE 07, 2024",
    },

    {
      id: 2,
      image:blog10,
      tag: "FOOD",
      title: "Yoga Day",
      date: "JUNE 21, 2024",
    },
    {
      id: 7,
      image:blog5,
      tag: "FOOD",
      title: "Pragna Trust Visit",
      date: "April 20, 2024",
    },
    {
      id: 8,
      image:blog11,
      tag: "FOOD",
      title: "Blood Test",
      date: "JUNE 23, 2024",
    },
    
  ];
  const formatTitleToUrl = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  };
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedBlogIndex(index);
  };

  const handleClose = () => {
    setSelectedBlogIndex(null);
  };

  const handlePrev = () => {
    setSelectedBlogIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogs.length - 1
    );
  };

  const handleNext = () => {
    setSelectedBlogIndex((prevIndex) =>
      prevIndex < blogs.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection subHead="Home / Blog" mainHead="Blog" />
      <div className="about_section_title pb-25 container">
        <span className="ap_subtitle">WELCOME TO OUR</span>
        <h4 className="as_title">AUT-Arpana!</h4>
      </div>
      <div className="our-poorex-container container mt-5">
        <div className="row align-items-center ">
          <div className="left-side animated tpfadeLeft col-xl-6 col-md-5">
            <div className="about_section_title">
              <div className="as_text">
                <p>
                  As we step into the vibrant months of April, May, and June,
                  our ALFAA community is abuzz with excitement. April month
                  marks Autism acceptance. It is a time to move beyond mere
                  awareness and embrace acceptance. It is a period dedicated to
                  educating the community, promoting inclusivity, and
                  celebrating the unique perspectives and talents of individuals
                  with autism. As we progress, we are focusing more on
                  strengthening the systems required to support the growth and
                  development of each child, especially those with autism. Youth
                  play a crucial role in bringing about change in society, and
                  at ALFAA, we believe that involving and engaging young talent
                  in interactions with our students with autism is a key step in
                  fostering community awareness and acceptance. As part of this
                  initiative, we have continued our multidisciplinary internship
                  program, which we started last year, welcoming students from
                  Christ University, U PES,and SRM I nstitute of Technology.
                  Additionally, we had the opportunity to interact with grade 12
                  students from National Public School and Chrysalis High
                  School, engaging them in community work and emphasizing the
                  importance of autism acceptance.
                </p>
              </div>
            </div>
          </div>
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            <div className="main-img position-relative pl-5">
              <img src={blog1} alt="" className="abouimg1" height="300px" />
            </div>
          </div>
        </div>
      </div>
      <div className="our-poorex-container container mt-5">
        <div className="row align-items-center ">
          <div className="left-side animated tpfadeLeft col-xl-6 col-md-5">
            <div className="main-img position-relative pl-5">
              <img src={blog2} alt="" className="abouimg1" height="300px" />
            </div>
          </div>
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            <div className="about_section_title">
              <div className="as_text">
                <p>
                  ALFAA is also progressing in its efforts to build a larger
                  residential campus. I n retrospect, our journey through the
                  months of April, May and June has been incredibly enriching
                  and inspiring. I invite you to read about our activities and
                  see the positive impact we had on our community. Together, let
                  us acknowledge the strides we, all our readers, including our
                  staff, students, parents, volunteers, and well-wishers, are
                  making toward greater autism awareness and acceptance.
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between" style={{paddingRight:'10%'}}>
                <div>
                  <p>Best Regards</p>
                  <p>Tejo Prasanna</p>
                </div>
                <div>
                  <img src={blog3} alt="" width="150px" height="150px"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container blog-header-container mt-5">s
      </div>
      <div className="container mt-5">
        <p>
          As we step into the vibrant months of April, May, and June, our ALFAA
          community is abuzz with excitement. April month marks Autism
          acceptance. It is a time to move beyond mere awareness and embrace
          acceptance. It is a period dedicated to educating the community,
          promoting inclusivity, and celebrating the unique perspectives and
          talents of individuals with autism. As we progress, we are focusing
          more on strengthening the systems required to support the growth and
          development of each child, especially those with autism. Youth play a
          crucial role in bringing about change in society, and at ALFAA, we
          believe that involving and engaging young talent in interactions with
          our students with autism is a key step in fostering community
          awareness and acceptance. As part of this initiative, we have
          continued our multidisciplinary internship program, which we started
          last year, welcoming students from Christ University, U PES,and SRM I
          nstitute of Technology. Additionally, we had the opportunity to
          interact with grade 12 students from National Public School and
          Chrysalis High School, engaging them in community work and emphasizing
          the importance of autism acceptance.
        </p>
      </div> */}
      <div className="blog-area my-5">
        <div className="container blog-area-container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 animated tpfadeUp blog-card-item"
              >
                <div className="blog-item">
                  <div className="blog-item-thumb">
                    <img src={blog.image} alt="" />
                    <div className="blog-icon">
                      <Link
                        className="plus-symbol"
                        onClick={() => handleOpen(index)}
                      >
                        +
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item-content">
                    <div className="blog-tag mb-3">
                      <AiOutlineTag size={20} /> <span>{blog.tag}</span>
                    </div>
                    <Link className="blog-link">{blog.title}</Link>
                    <div>
                      <span className="blog-meta">{blog.date}</span>
                    </div>
                    <Link to={`/${formatTitleToUrl(blog.title)}`}>
                      <div className="read-more-link">
                        <span>
                          Read More <FaLongArrowAltRight />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedBlogIndex !== null && (
        <div className="image-viewer-overlay">
          <div className="image-viewer-content">
            <button className="image-viewer-close" onClick={handleClose}>
              <AiOutlineClose size={24} />
            </button>
            <div className="d-flex flex-row justify-content-between">
              <button
                className="image-viewer-arrow image-viewer-arrow-left"
                onClick={handlePrev}
              >
                <RiPlayReverseLargeFill size={24} />
              </button>
              <img
                src={blogs[selectedBlogIndex].image}
                alt=""
                className="image-viewer-image"

              />
              <button
                className="image-viewer-arrow image-viewer-arrow-right"
                onClick={handleNext}
              >
                <RiPlayLargeFill size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
