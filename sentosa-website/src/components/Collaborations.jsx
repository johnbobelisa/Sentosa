import React, { useRef, useState, useEffect } from "react";
import "./Collaborations.css";
import textContent from "../textContent.json"


const cards = [
  {
    imgSrc: "image1.jpg",
    imgAlt: "Image 1",
    title: "BP",
    description: "World marketing leader WPP is enabling the beverage giant to accelerate iteration on creative campaigns at a global scale..."
  },
  {
    imgSrc: "image2.jpg",
    imgAlt: "Image 2",
    title: "PERTAMINA EP",
    description: "Discover how leading enterprises are leveraging our platform to transform their digital workflows..."
  },
  {
    imgSrc: "image3.jpg",
    imgAlt: "Image 3",
    title: "PERTAMINA",
    description: "AI-powered simulations are drastically cutting down research times and enabling new therapies."
  },
  {
    imgSrc: "image4.jpg",
    imgAlt: "Image 4",
    title: "MEDCOENERGI",
    description: "Learn how AI is enabling predictive maintenance, quality assurance, and efficient production lines."
  },
  {
    imgSrc: "image5.jpg",
    imgAlt: "Image 5",
    title: "CHIYODA CORPORATION",
    description: "Explore the latest breakthroughs in self-driving technology and how they're shaping the future of mobility."
  },
  {
    imgSrc: "image6.jpg",
    imgAlt: "Image 6",
    title: "CSTS",
    description: "Learn how companies are on the way to sustainable AI with NVIDIA technologies."
  }
];

const SCROLL_AMOUNT = 300; // pixels to scroll each arrow click (adjust as needed)

const Collaborations = () => {
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
    <div id="Collaborations" className="collaborations-outer-container">
      {/* Fixed/absolute positioned header and arrows at top */}
      <div className="collaborations-header-bar">
        <h1>Collaborations</h1>
        <div className="collaborations-arrows">
          <button className="arrow-button left" onClick={handlePrev}>❮</button>
          <button className="arrow-button right" onClick={handleNext}>❯</button>
        </div>
      </div>

      <div className="collaborations-horizontal-scroll" ref={containerRef}>
        {/* About Us text block with padding-left:18% */}
        <div className="collaborations-content-block">
          <p>
          SEPP actively collaborates with industries in LNG applications, carbon capture, and gas treatment sectors to provide innovative and sustainable solutions. Through partnerships with LNG plants and emerging energy sectors, SEPP focuses on removing impurities like CO₂ and H₂S efficiently while optimizing gas production quality.
          </p>
        </div>

        {/* Cards follow continuously */}
        {cards.map((card, index) => (
          <div className="collaborations-card" key={index}>
            <div className="collaborations-card-image">
              <img src={card.imgSrc} alt={card.imgAlt} />
            </div>
            <div className="collaborations-card-text">
              <div className="collaborations-card-category">
                {card.category}
              </div>
              <h3 className="collaborations-card-title">
                {card.title}
              </h3>
              <p className="collaborations-card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="collaborations-progress-bar-container">
        <div className="collaborations-progress-bar-bg">
          <div
            className="collaborations-progress-bar-fill"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
