import React from "react";
import {
  FaBell,
  FaCaretDown,
  FaFacebook,
  FaFacebookMessenger,
  FaFontAwesomeFlag,
  FaGamepad,
  FaHome,
  FaPlus,
  FaSistrix,
  FaUsers,
  FaViadeo,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <FaFacebook className="navbar__logo" />
        </div>
        <div className="navbar__first-search">
          <input
            type="text"
            className="navbar__first-searchbar"
            placeholder="Search Facebook"
          />
          <FaSistrix className="navbar__searchIcon" />
        </div>
      </div>
      <div className="navbar__middle">
        <span className="middleIcons">
          <FaHome className="navbaar__middle-icons" />
        </span>
        <span className="middleIcons">
          <FaFontAwesomeFlag className="navbaar__middle-icons" />
          <span className="navbar__notify">3</span>
        </span>
        <span className="middleIcons">
          <FaViadeo className="navbaar__middle-icons" />
          <span className="navbar__notify">22</span>
        </span>
        <span className="middleIcons">
          <FaUsers className="navbaar__middle-icons" />
          <span className="navbar__notify">9</span>
        </span>
        <span className="middleIcons">
          <FaGamepad className="navbaar__middle-icons" />
          <span className="navbar__notify">12</span>
        </span>
      </div>
      <div className="navbar__last">
        <span className="navbar__last-section">
          <FaPlus />
        </span>
        <span className="navbar__last-section">
          <FaFacebookMessenger />
        </span>
        <span className="navbar__last-section">
          <FaBell />
        </span>
        <span className="navbar__last-section">
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
