import React from "react";

const Input = ({ color, setColor }) => {
  return (
    <form
      className="form-input"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="enter color"
        autoFocus
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </form>
  );
};

export default Input;
