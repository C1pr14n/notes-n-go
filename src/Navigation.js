import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";

const Navigation = ({ filterBy, onFilter }) => {
  return (
    <div className="navigation">
      <Logo />
      <Menu filterBy={filterBy} onFilter={onFilter} />
    </div>
  );
};

export default Navigation;
