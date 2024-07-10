import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import logo from'../assets/netflix_logo.png';
import avatar from '../assets/avatar.jpg';
import { FaSearch, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          className="navbar__logo"
          src={logo}
          alt="Netflix Logo"
        />
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/newpopular">New & Popular</Link>
          <Link to="/mylist">My List</Link>
        </div>
      </div>
      <div className="navbar__right">
        <FaSearch className="navbar__icon" />
        <FaBell className="navbar__icon" />
        <img
          className="navbar__avatar"
          src={avatar}
          alt="Netflix Avatar"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="navbar__dropdown">
            <Link href="#profile">Profile</Link>
            <Link href="#settings">Settings</Link>
            <Link href="#logout">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

