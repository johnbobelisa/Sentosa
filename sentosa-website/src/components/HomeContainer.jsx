import React, { useState, useEffect, useRef } from "react";
import "./HomeContainer.css";
import picture1 from "../assets/picture1.jpg"
import picture2 from "../assets/picture2.jpg"
import picture3 from "../assets/picture3.jpg"

const slides = [
  {
    image: picture1,
    title: "Slide 1 Title",
    description: "This is the first slide."
  },
  {
    image: picture2,
    title: "Slide 2 Title",
    description: "This is the second slide."
  },
  {
    image: picture3,
    title: "Slide 3 Title",
    description: "This is the third slide."
  }
];

const SLIDE_INTERVAL = 5000; // 5 seconds

const HomeContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // We’ll use this ref to handle the progress bar animation timing
  const progressRef = useRef(null);

  useEffect(() => {
    // Set interval for automatic slide change
    const interval = setInterval(() => {
      nextSlide();
    }, SLIDE_INTERVAL);

    // Reset progress bar animation at the start of each slide
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      // Force a reflow to restart CSS animation properly
      void progressRef.current.offsetWidth; 
      // Animate over SLIDE_INTERVAL
      progressRef.current.style.transition = `width ${SLIDE_INTERVAL}ms linear`;
      progressRef.current.style.width = "100%";
    }

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const { image, title, description } = slides[currentIndex];

  return (
    <div className="home-container">
      <div className="slide" style={{ backgroundImage: `url(${image})` }}>
        <div className="slide-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="controls">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
        <div className="indicators">
          {slides.map((_, i) => (
            <span 
              key={i} 
              onClick={() => goToSlide(i)} 
              className={i === currentIndex ? "active" : ""}
            ></span>
          ))}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" ref={progressRef}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
