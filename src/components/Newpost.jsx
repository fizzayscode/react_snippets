import React from "react";

const Newpost = ({ both, setBoth, handleChange, handleSubmit }) => {
  return (
    <form className="form-cont" onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <label htmlFor="title">title:</label>
      <input
        name="title"
        type="text"
        id="title"
        value={both.title}
        onChange={handleChange}
      />
      <label htmlFor="body">blog message:</label>
      <textarea
        name="body"
        id="body"
        cols="30"
        rows="10"
        placeholder="post blog"
        value={both.body}
        onChange={handleChange}
      ></textarea>
      <button type="submit">submit</button>
    </form>
  );
};

export default Newpost;
