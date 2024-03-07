import React from "react";
import "./Header.css";
import Nav from "./Nav";
import { photo, logo1, logo2, logo3, logo4, logo5, vector } from "../assets";

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
          <button>
            Let's get started <img src={vector} />
          </button>
        </div>
        <div className="header__photo">
          <img src={photo} alt="photo" />
        </div>
      </div>
      <div className="header__company">
        <p>Worked with</p>
        <div className="company__logos">
          <img src={logo1} alt="company logo1" />
          <img src={logo2} alt="company logo2" />
          <img src={logo3} alt="company logo3" />
          <img src={logo4} alt="company logo4" />
          <img src={logo5} alt="company logo5" />
        </div>
      </div>
    </div>
  );
}
