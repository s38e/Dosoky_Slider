"use client"; // <===== REQUIRED

import React, { useState } from "react";
import SliderChest from "./components/sliderChest";
import SliderBack from "./components/sliderBack";
import SliderLeg from "./components/sliderLeg";
import Image from "next/image";
import "./page-module.css";

export default function Home() {
  const [activeSlider, setActiveSlider] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (sliderType) => {
    setActiveSlider(sliderType);
    setActiveButton(sliderType);
  };

  const handleCancelClick = () => {
    setActiveSlider("");
    setActiveButton("");
  };

  return (
    <main className="main">
      {activeSlider === "chest" && <SliderChest />}
      {activeSlider === "back" && <SliderBack />}
      {activeSlider === "leg" && <SliderLeg />}
      {/* ضيف باقي السلايدرز هنا */}
      {activeSlider && (
        <button onClick={handleCancelClick} className="cancel-btn">
          Close
        </button>
      )}
      <div className="btns">
        <button
          onClick={() => handleButtonClick("chest")}
          className={`btn ${activeButton === "chest" ? "active" : ""}`}
        >
          Chest
        </button>
        <button
          onClick={() => handleButtonClick("back")}
          className={`btn ${activeButton === "back" ? "active" : ""}`}
        >
          Back
        </button>
        <button
          onClick={() => handleButtonClick("leg")}
          className={`btn ${activeButton === "leg" ? "active" : ""}`}
        >
          Leg
        </button>
        {/* ضيف باقي الأزرار هنا */}
      </div>
    </main>
  );
}
