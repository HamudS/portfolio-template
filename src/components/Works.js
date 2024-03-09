import React, { useState } from "react";
import "./Works.css";
import { work1, work2, work3, work4, work5 } from "../assets";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Card from "./Card";

export default function Works() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [work1, work2, work3, work4, work5];
  const images2 = [work5, work4, work2, work3, work1];
  const showPrev = () => {
    if (currentImage === 0) return setCurrentImage(images.length - 1);
    return setCurrentImage(currentImage - 1);
  };
  const showNext = () => {
    if (currentImage === images.length - 1) return setCurrentImage(0);
    return setCurrentImage(currentImage + 1);
  };

  return (
    <div className="works">
      <div className="works__heading">
        <h1>Recent Work</h1>
        <p>
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="slider">
        <GrLinkPrevious className="icon" onClick={showPrev} />
        <Card image={images[currentImage]} />
        <Card image={images2[currentImage]} />
        <GrLinkNext className="icon" onClick={showNext} />
      </div>
    </div>
  );
}
