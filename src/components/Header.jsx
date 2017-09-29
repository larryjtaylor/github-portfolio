import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Github Projects</h1>
        <Link to="/">Welcome</Link> | <Link to="/repos">Github Repos</Link>
    </div>
  );
}

export default Header;
