import React from "react";
import Nav from "./Nav";
import Search from "./Search";

const Header = ({ title, search, setSearch, post, setPost }) => {
  return (
    <div className="nav">
      <h1
        style={{
          background: "lightblue",
          textAlign: "left",
          padding: "12px 12px",
        }}
      >
        {title}
      </h1>
      <div>
        <Search
          search={search}
          setSearch={setSearch}
          post={post}
          setPost={setPost}
        />
      </div>
    </div>
  );
};

export default Header;
