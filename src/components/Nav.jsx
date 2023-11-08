import React from "react";
import SharedLink from "./SharedLink";

const Nav = () => {
  return (
    <div>
      <SharedLink to="/" name="Home" />
      <SharedLink to="/newpost" name="Post" />
      <SharedLink to="/About" name="About" />
    </div>
  );
};

export default Nav;
