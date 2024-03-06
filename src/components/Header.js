import React from "react";
import "./Header.css";
import Nav from "./Nav";
import { photo, logo1, logo2, logo3, logo4, logo5 } from "../assets";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="header__section">
        <div className="header__content">
          <h1>Your Name Here</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button>Let's get started</button>
        </div>
        <div className="header__photo">
          <img src={photo} alt="photo" />
        </div>
      </div>
      <div className="header__company"></div>
    </div>
  );
}
