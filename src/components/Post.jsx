import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          margin: "12px 12px",
        }}
        to={`/post/${post.id}`}
      >
        <h2>{post.title}</h2>
        <small>{post.date}</small>
        <p className="post-body">
          {post.body.length <= 25
            ? post.body
            : `${post.body.slice(0, 45)}.....`}
        </p>
      </Link>
    </div>
  );
};

export default Post;
