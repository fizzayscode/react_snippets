import React from "react";
import Nav from "./Nav";

const Search = ({ search, setSearch }) => {
  return (
    <div className="form-container">
      <form
        className="form-input"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(search);
          // const newList = post.filter((each) => {
          //   console.log(each);
          //   return each?.title?.includes(search);
          // });
          // setPost(newList);
        }}
      >
        <input
          type="text"
          placeholder="search blog"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <Nav />
    </div>
  );
};

export default Search;
