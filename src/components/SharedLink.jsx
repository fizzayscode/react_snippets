import React from "react";
import { Link } from "react-router-dom";

const SharedLink = ({ to, name }) => {
  return (
    <Link
      to={to}
      style={{
        display: "inline-flex",
        textDecoration: "none",
        color: "white",
        margin: "12px 12px",
      }}
    >
      {name}
    </Link>
  );
};

export default SharedLink;
