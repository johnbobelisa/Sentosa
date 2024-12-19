import React, { useRef, useState, useEffect } from "react";
import "./CProducts.css";
import textContent from "../textContent.json"

import pict1 from "../assets/assets_products/pict1.jpg"
import pict2 from "../assets/assets_products/pict2.jpg"
import pict3 from "../assets/assets_products/pict3.jpg"
import pict4 from "../assets/assets_products/pict4.jpg"
import pict5 from "../assets/assets_products/pict5.jpg"
import pict6 from "../assets/assets_products/pict6.jpg"
import pict7 from "../assets/assets_products/pict7.jpg"


// Example cards data
const cards = [
  {
    imgSrc: pict1,
    imgAlt: "Image 1",
    title: "SEPP Amine Ungu",
    description: "MDEA-based amine product designed for CO₂ and H₂S removal, with low energy requirements, reduced CAPEX, and operational efficiency."
  },
  {
    imgSrc: pict2,
    imgAlt: "Image 2",
    title: "SEPP Amine Putih",
    description: "Used for selective removal of impurities like H₂S and CO₂ in natural gas streams, ensuring gas purity."
  },
  {
    imgSrc: pict3,
    imgAlt: "Image 3",
    title: "SEPPBRINE Viscosifiers",
    description: "High-yield viscosifiers compatible with fresh water, KCl, and CaCl₂, providing reservoir-friendly solutions for workover and drilling fluids."
  },
  {
    imgSrc: pict4,
    imgAlt: "Image 4",
    title: "Lost Circulation Materials (LCM)",
    description: "Products like SEPSEAL and Nut Plug are designed to stop fluid invasion and stabilize formations during drilling."
  },
  {
    imgSrc: pict5,
    imgAlt: "Image 5",
    title: "Corrosion Inhibitors",
    description: "SEPP provides various corrosion inhibitors, including products like CORR SEPP 0333, for brine systems and drilling fluids."
  },
  {
    imgSrc: pict6,
    imgAlt: "Image 6",
    title: "Biocides and Oxygen Scavengers",
    description: "SEPP offers solutions such as BioSEPP and SEPP OS to inhibit bacterial growth and remove oxygen from drilling muds."
  },
  {
    imgSrc: pict7,
    imgAlt: "Image 7",
    title: "Defoamers and Additives",
    description: "SEPP provides defoamers (e.g., SEPP Foam, Aluminum Stearate) and other drilling additives to improve operational performance."
  },
];

const SCROLL_AMOUNT = 300; // pixels to scroll each arrow click (adjust as needed)

const CProducts = () => {
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
    <div id="Products" className="CProducts-outer-container">
      {/* Fixed/absolute positioned header and arrows at top */}
      <div className="CProducts-header-bar">
        <h1>Products</h1>
        <div className="CProducts-arrows">
          <button className="arrow-button left" onClick={handlePrev}>❮</button>
          <button className="arrow-button right" onClick={handleNext}>❯</button>
        </div>
      </div>

      <div className="CProducts-horizontal-scroll" ref={containerRef}>
        {/* About Us text block with padding-left:18% */}
        <div className="CProducts-content-block">
          <p>
          SEPP’s portfolio includes over 100 specialty chemical products designed for diverse applications in oil and gas drilling, production, and refining.
          </p>
        </div>

        {/* Cards follow continuously */}
        {cards.map((card, index) => (
          <div className="CProducts-card" key={index}>
            <div className="CProducts-card-image">
              <img src={card.imgSrc} alt={card.imgAlt} />
            </div>
            <div className="CProducts-card-text">
              <div className="CProducts-card-category">
                {card.category}
              </div>
              <h3 className="CProducts-card-title">
                {card.title}
              </h3>
              <p className="CProducts-card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="CProducts-progress-bar-container">
        <div className="CProducts-progress-bar-bg">
          <div
            className="CProducts-progress-bar-fill"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CProducts;
