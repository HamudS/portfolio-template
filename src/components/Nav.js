import React, { useState } from "react";
import "./Nav.css";
import { linkedin, behance, twitter } from "../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="nav__bar">
      <div className="nav__links">
        <ul>
          <li>Home</li>
          <li>Cases Studies</li>
          <li>Testimonials</li>
          <li>Recent Work</li>
          <li>Get In Touch</li>
        </ul>
      </div>
      <div className="nav__social" color="black">
        <img src={linkedin} alt="linkedin" color="black" />
        <img src={behance} alt="behance" />
        <img src={twitter} alt="twitter" />
      </div>
      <div className="nav__smallscreen">
        <GiHamburgerMenu
          className="hamburger"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="nav__smallscreen-links">
            <MdOutlineClose
              fontSize={27}
              className="nav__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul>
              <li>Home</li>
              <li>Cases Studies</li>
              <li>Testimonials</li>
              <li>Recent Work</li>
              <li>Get In Touch</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
