import React from "react";
import "./Testimonials.css";
import { client1, client2, client3, client4 } from "../assets";

export default function Testimonials() {
  return (
    <div className="testimonial__section">
      <div className="testimonial__heading">
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="testimonial__qoutes">
        <div className="quote quote--1">
          <div className="sign">"</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="client">
            <img src={client1} />
            <h4>Client Name</h4>
          </div>
        </div>
        <div className="quote quote--2">
          <div className="sign">"</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="client">
            <img src={client2} />
            <h3>Client Name</h3>
          </div>
        </div>
        <div className="quote quote--3">
          <div className="sign">"</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="client">
            <img src={client3} />
            <h3>Client Name</h3>
          </div>
        </div>
        <div className="quote quote--4">
          <div className="sign">"</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="client">
            <img src={client4} />
            <h3>Client Name</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
