import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "../../svg icuns/MenuIcun"; 
import CloseIcun from "../../svg icuns/CloseIcun"; 
import SearchIcun from "../../svg icuns/SearchIcun"; 
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("click");
  };

  return (
    <div className="navbar">
      <div className="leftNavbar">
        <div className="menuIcunCtr" onClick={ToggleMenu}>
          {showMenu ? (
            <CloseIcun color="white" />
          ) : (
            <MenuIcon color="white" className="menu" />
          )}
        </div>
        {showMenu ? (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/webseries">Web Series</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
        ) : (
          <h4>Website</h4>
        )}
      </div>
      <div className="rightNavbar">
        <input type="text" placeholder="Search here..." className="inputBar" />
        <div className="searchIcunCtr">
          <SearchIcun />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
