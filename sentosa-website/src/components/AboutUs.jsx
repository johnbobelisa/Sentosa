import React, { useRef, useState, useEffect } from "react";
import "./AboutUs.css";
import textContent from "../textContent.json"

import pic1 from "../assets/assets_aboutus/aboutus1.jpg"
import pic2 from "../assets/assets_aboutus/aboutus2.jpg"
import pic3 from "../assets/assets_aboutus/aboutus3.jpg"
import pic4 from "../assets/assets_aboutus/aboutus4.jpg"
import pic5 from "../assets/assets_aboutus/aboutus5.jpg"
import pic6 from "../assets/assets_aboutus/aboutus6.jpg"


// Example cards data
const cards = [
  {
    imgSrc: pic1,
    title: "Company Overview",
    description: "PT. Sentosa Eka Perdana Prima (SEPP) – A chemical company with a broad product portfolio (amines, diols, polyalcohols, acids) serving oil, gas, and various industrial sectors."
  },
  {
    imgSrc: pic4,
    imgAlt: "Image 4",
    title: "Formulations & Solvents",
    description: "SEPP provides high-quality chemical products for gas treatment applications, focusing on corrosion prevention, leakage management, waste disposal, and aspects of Health, Safety, and Environment (EHS)."
  },
  {
    imgSrc: pic6,
    imgAlt: "Image 5",
    title: "Distribution and Manufacturing",
    description: "We produce and market over 100 types of chemical products, while also providing consultation services and problem-solving solutions to help improve customer efficiency."
  },
  {
    imgSrc: pic3,
    imgAlt: "Image 3",
    title: "Storage Location",
    description: "SEPP ensures reliable and consistent product supply, with warehouses in Cikarang and Surabaya for efficient storage and distribution."
  },

  {
    imgSrc: pic2,
    imgAlt: "Image 2",
    title: "High Operational Standards",
    description: "SEPP takes full responsibility for its products, improving quality, comfort, and efficiency while maintaining sustainability."
  },
  {
    imgSrc: pic5,
    imgAlt: "Image 6",
    title: "Natural Gas & LNG",
    description: "SEPP Amine products are used for CO₂ and H₂S purification applications in natural gas and LNG, as well as other gas compositions."
  }
];

const SCROLL_AMOUNT = 300; // pixels to scroll each arrow click (adjust as needed)

const AboutUs = () => {
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
    <div id="about-us" className="about-us-outer-container">
      {/* Fixed/absolute positioned header and arrows at top */}
      <div className="about-us-header-bar">
        <h1>About Us</h1>
        <div className="about-us-arrows">
          <button className="arrow-button left" onClick={handlePrev}>❮</button>
          <button className="arrow-button right" onClick={handleNext}>❯</button>
        </div>
      </div>

      <div className="about-us-horizontal-scroll" ref={containerRef}>
        {/* About Us text block with padding-left:18% */}
        <div className="about-us-content-block">
          <p>
            {textContent.aboutUsPrimaryText}
          </p>
        </div>

        {/* Cards follow continuously */}
        {cards.map((card, index) => (
          <div className="about-us-card" key={index}>
            <div className="about-us-card-image">
              <img src={card.imgSrc} alt={card.imgAlt} />
            </div>
            <div className="about-us-card-text">
              <div className="about-us-card-category">
                {card.category}
              </div>
              <h3 className="about-us-card-title">
                {card.title}
              </h3>
              <p className="about-us-card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="about-us-progress-bar-container">
        <div className="about-us-progress-bar-bg">
          <div
            className="about-us-progress-bar-fill"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
