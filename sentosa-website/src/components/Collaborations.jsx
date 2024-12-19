import React, { useRef, useState, useEffect } from "react";
import "./Collaborations.css";
import textContent from "../textContent.json"

import csts from "../assets/assets_collaborations/csts.jpg"
import gasuma from "../assets/assets_collaborations/gasuma.jpg"
import piep from "../assets/assets_collaborations/piep.jpg"
import pertamina from "../assets/assets_collaborations/pertamina.jpg"
import bp from "../assets/assets_collaborations/bp.jpg"
import medco from "../assets/assets_collaborations/medco.jpg"



const cards = [
  {
    imgSrc: bp,
    imgAlt: "Image 1",
    title: "BP",
    description: "BP is a global oil and gas company engaged in energy production, exploration, refining, and distribution. Collaboration involved providing the 'SEPP AMINE UNGU'."
  },
  {
    imgSrc: piep,
    imgAlt: "Image 2",
    title: "PERTAMINA EP",
    description: "PIEP is a subsidiary of Pertamina focused on upstream oil and gas exploration and production on an international scale."
  },
  {
    imgSrc: pertamina,
    imgAlt: "Image 3",
    title: "PERTAMINA",
    description: "Pertamina is an Indonesian state-owned oil and gas company that manages upstream and downstream operations."
  },
  {
    imgSrc: medco,
    imgAlt: "Image 4",
    title: "MEDCOENERGI",
    description: "MedcoEnergi is an Indonesian energy company involved in oil, gas exploration, and power generation."
  },
  {
    imgSrc: csts,
    imgAlt: "Image 6",
    title: "CSTS",
    description: "CSTS is a consortium or group of companies (often associated with engineering and construction in energy projects)."
  },
  {
    imgSrc: gasuma,
    imgAlt: "Image 6",
    title: "Gasuma Federal Indonesia",
    description: "Gasuma Federal Indonesia is an Indonesian company involved in the energy sector, focusing on natural gas distribution, processing, and related infrastructure development."
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
