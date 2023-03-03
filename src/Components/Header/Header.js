import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="title-container">
        <div className="title">Home</div>
        <div className="title">Pokedex</div>
        <div className="title">Videogames</div>
        <div className="title">GCC Pokemon</div>
        <div className="title">TV Pokemon</div>
        <div className="title">Play! Pokemon</div>
        <div className="title">News</div>
      </div>
    </div>
  );
}

export default Header;
