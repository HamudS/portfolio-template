import React from "react";
import { vector } from "../assets";
import "./Card.css";

export default function Card({ image }) {
  return (
    <div className="card">
      <img src={image} />
      <h3>Work name here</h3>
      <p>
        Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
        labore et dolore magna.
      </p>
      <button>
        Know more <img src={vector} />
      </button>
    </div>
  );
}
