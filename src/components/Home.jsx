import React from "react";
import Feed from "./Feed";
import Postpage from "./Postpage";

const Home = ({ post }) => {
  return (
    <div className="one">
      {post.length > 0 ? (
        <Feed post={post} />
      ) : (
        <p style={{ marginTop: "2rem" }}> no post to display </p>
      )}
    </div>
  );
};

export default Home;
