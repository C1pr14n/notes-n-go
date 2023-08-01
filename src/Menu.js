import React from "react";

const Menu = ({ filterBy, onFilter }) => {
  return (
    <div className="menu">
      <div>Search 🔍</div>
      <select value={filterBy} onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="name">Title name</option>
      </select>
    </div>
  );
};

export default Menu;
