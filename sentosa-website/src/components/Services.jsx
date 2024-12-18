import React, { useRef, useState, useEffect } from "react";
import "./Services.css";
import textContent from "../textContent.json"

// Example cards data
const cards = [
  {
    imgSrc: "image1.jpg",
    imgAlt: "Image 1",
    category: "SIMULATION | ANNOUNCEMENT",
    title: "Gas Treatment",
    description: "SEPP provides high-performance gas treatment solutions used in gas sales and LNG applications, including emerging sectors like carbon capture, biogas, and floating LNG."
  },
  {
    imgSrc: "image2.jpg",
    imgAlt: "Image 2",
    category: "ENTERPRISE | NEWS",
    title: "Consultancy Services",
    description: "SEPP offers consultation services for problem-solving, increasing efficiency, and providing tailored solutions for client requirements."
  },
  {
    imgSrc: "image3.jpg",
    imgAlt: "Image 3",
    category: "HEALTHCARE | RESEARCH",
    title: "Logistics & Distribution",
    description: "SEPP ensures reliable and consistent product supply, with warehouses in Cikarang and Surabaya for efficient storage and distribution."
  },
  {
    imgSrc: "image4.jpg",
    imgAlt: "Image 4",
    category: "MANUFACTURING | BLOG",
    title: "Environmental Solutions",
    description: "SEPP specializes in handling waste management, environmental safety, and corrosion control for oil and gas industries."
  },
  {
    imgSrc: "image5.jpg",
    imgAlt: "Image 5",
    category: "AUTOMOTIVE | SPOTLIGHT",
    title: "Operational Expertise",
    description: "SEPP has completed over 10 gas treatment projects successfully across Indonesia with high standards and operational efficiency."
  },
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
          PT. Sentosa Eka Perdana Prima (SEPP) offers a wide range of technical services tailored for industries like oil and gas, petrochemicals, and energy
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
