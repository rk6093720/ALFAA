import React from "react";
import "./common.css";
import { FaRegComments } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PostItem = ({ imgSrc, comments, title }) => (
  <div className="sidebar-post-content d-flex align-items-center mb-4">
    <div className="sidebar-post-content-thumb">
      <Link>
        <img src={imgSrc} alt="" />
      </Link>
    </div>
    <div className="spc-content">
      <div className="spc-meta">
        <span>
          <FaRegComments /> {comments} Comments
        </span>
      </div>
      <h3 className="spc-title">{title}</h3>
    </div>
  </div>
);

const OurLatestPost = () => {
  const posts = [
    {
      imgSrc:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-details-sm-1-2.jpg",
      comments: "02",
      title: "We Should Donate For Indian's Poor",
    },
    // Add more posts here if needed
  ];

  return (
    <div className="sidebar-widget1">
      <h3 className="sw-title">Our Latest Post</h3>
      <div className="sw-content">
        <div className="sidebar-post">
          {posts.map((post, index) => (
            <PostItem
              key={index}
              imgSrc={post.imgSrc}
              comments={post.comments}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLatestPost;
