import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <div>
      <h1>Github Projects Portfolio</h1>
        <Link to="/">Welcome</Link> | <Link to="/about">About Me</Link> | <Link to="/repos">Github Repos</Link>
    </div>
  );
}

export default Header;
