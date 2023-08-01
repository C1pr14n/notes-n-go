import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="btn-add-note" onClick={onClick}>
      🖍️
    </button>
  );
};

export default Button;
