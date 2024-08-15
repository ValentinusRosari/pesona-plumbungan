import React from "react";
import LandingImage from "../images/LandingImage.svg";
import TentangSection from "./TentangSection";
import WisataSection from "./WisataSection";
import BudayaSection from "./BudayaSection";
import KomoditasSection from "./KomoditasSection";

const Landing = () => {
  return (
    <div>
      <img src={LandingImage} alt="Landing Page" />
      <TentangSection />
      <WisataSection />
      <BudayaSection />
      <KomoditasSection />
    </div>
  );
};

export default Landing;
