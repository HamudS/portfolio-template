import React from "react";
import "./Main.css";
import { work1, work2, work3, vector } from "../assets";

export default function Main() {
  return (
    <main className="main__section">
      <div className="main__heading">
        <h2>Case Studies</h2>
        <p>
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="main__work work--1">
        <div className="content__outer">
          <div className="work__content">
            <div className="tag tag--1">Fintech</div>
            <h3>Work name here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button>
              View case study <img src={vector} />
            </button>
          </div>
        </div>
        <div className="work__image">
          <img src={work1} />
        </div>
      </div>
      <div className="main__work work--2">
        <div className="content__outer">
          <div className="work__content">
            <div className="tag tag--2">EdTech</div>
            <h3>Work name here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button>
              View case study <img src={vector} />
            </button>
          </div>
        </div>
        <div className="work__image">
          <img src={work2} />
        </div>
      </div>
      <div className="main__work work--3">
        <div className="content__outer">
          <div className="work__content">
            <div className="tag tag--3">Pharma</div>
            <h3>Work name here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button>
              View case study <img src={vector} />
            </button>
          </div>
        </div>
        <div className="work__image">
          <img src={work3} />
        </div>
      </div>
    </main>
  );
}
