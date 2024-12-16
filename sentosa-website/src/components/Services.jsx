import React, { useRef, useState, useEffect } from "react";
import "./Services.css";
import textContent from "../textContent.json"

// Example cards data
const cards = [
  {
    imgSrc: "image1.jpg",
    imgAlt: "Image 1",
    category: "SIMULATION | ANNOUNCEMENT",
    title: "The Coca-Cola Company and WPP Build Generative AI Content Engine",
    description: "World marketing leader WPP is enabling the beverage giant to accelerate iteration on creative campaigns at a global scale..."
  },
  {
    imgSrc: "image2.jpg",
    imgAlt: "Image 2",
    category: "ENTERPRISE | NEWS",
    title: "Accelerating AI Innovations in the Cloud",
    description: "Discover how leading enterprises are leveraging our platform to transform their digital workflows..."
  },
  {
    imgSrc: "image3.jpg",
    imgAlt: "Image 3",
    category: "HEALTHCARE | RESEARCH",
    title: "Revolutionizing Drug Discovery with Digital Twins",
    description: "AI-powered simulations are drastically cutting down research times and enabling new therapies."
  },
  {
    imgSrc: "image4.jpg",
    imgAlt: "Image 4",
    category: "MANUFACTURING | BLOG",
    title: "Building Smart Factories With AI at the Edge",
    description: "Learn how AI is enabling predictive maintenance, quality assurance, and efficient production lines."
  },
  {
    imgSrc: "image5.jpg",
    imgAlt: "Image 5",
    category: "AUTOMOTIVE | SPOTLIGHT",
    title: "Autonomous Vehicles: The Road Ahead",
    description: "Explore the latest breakthroughs in self-driving technology and how they're shaping the future of mobility."
  },
  {
    imgSrc: "image6.jpg",
    imgAlt: "Image 6",
    category: "ARTIFICIAL INTELLIGENCE | BLOG",
    title: "Sustainable Strides: AI and Accelerated Computing Drive Energy Efficiency",
    description: "Learn how companies are on the way to sustainable AI with NVIDIA technologies."
  }
];

const SCROLL_AMOUNT = 300; // pixels to scroll each arrow click (adjust as needed)

const Services = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const scrollPos = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const fraction = maxScroll > 0 ? scrollPos / maxScroll : 0;
    setProgress(fraction);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  const handlePrev = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <div id="Services" className="Services-outer-container">
      {/* Fixed/absolute positioned header and arrows at top */}
      <div className="Services-header-bar">
        <h1>Services</h1>
        <div className="Services-arrows">
          <button className="arrow-button left" onClick={handlePrev}>❮</button>
          <button className="arrow-button right" onClick={handleNext}>❯</button>
        </div>
      </div>

      <div className="Services-horizontal-scroll" ref={containerRef}>
        {/* About Us text block with padding-left:18% */}
        <div className="Services-content-block">
          <p>
            {textContent.aboutUsPrimaryText}
          </p>
        </div>

        {/* Cards follow continuously */}
        {cards.map((card, index) => (
          <div className="Services-card" key={index}>
            <div className="Services-card-image">
              <img src={card.imgSrc} alt={card.imgAlt} />
            </div>
            <div className="Services-card-text">
              <div className="Services-card-category">
                {card.category}
              </div>
              <h3 className="Services-card-title">
                {card.title}
              </h3>
              <p className="Services-card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="Services-progress-bar-container">
        <div className="Services-progress-bar-bg">
          <div
            className="Services-progress-bar-fill"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
