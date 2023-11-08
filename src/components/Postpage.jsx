import React from "react";
import { useParams, Link } from "react-router-dom";

const Postpage = ({ post, handleDelete }) => {
  // has to be the same name you pass in the parameter when calling this route
  const { id } = useParams();
  const particular_post = post.find((one) => {
    return one.id.toString() === id;
  });
  return (
    <div className="post-page">
      {!particular_post && (
        <>
          <h1>
            couldnt find post visit out <Link to={"/"}> homepage</Link>
          </h1>
        </>
      )}
      <div className="post">
        {particular_post && (
          <>
            <h2>{particular_post.title}</h2>
            <small>{particular_post.date}</small>
            <p> {particular_post.body}</p>
            <button
              onClick={() => handleDelete(particular_post.id)}
              className="btns"
            >
              delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Postpage;
