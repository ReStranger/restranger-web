import React, { useState, useEffect } from "react";
import "../../../styles/components/main/projects/slider.scss";
import { slidesData } from "../../../data/data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="text-container">
              <h1>{slide.head}</h1>
              <p>{slide.caption}</p>
            </div>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </div>
      <div className="dots">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
