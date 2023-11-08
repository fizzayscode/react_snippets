import React from "react";
import Post from "./Post";

const Feed = ({ post }) => {
  return (
    <>
      {post.map((one) => (
        <Post key={one.id} post={one} />
      ))}
    </>
  );
};

export default Feed;
