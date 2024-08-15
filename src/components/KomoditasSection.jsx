import React from "react";
import Card from "./Card";
import bgBrown from "../assets/bgBrown.svg";
import Kelapa from "../images/Kelapa.jpeg";
import Ketela from "../images/Ketela.jpeg";
import Kopi from "../images/Kopi.jpeg";
import Toga from "../images/Toga.jpeg";

const KomoditasSection = () => {
  return (
    <section
      id="komoditas"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bgBrown})`, height: "100vh" }}
    >
      <div className="container mx-auto px-4 lg:mt-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Komoditas Lokal
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap space-x-4">
            <Card title="Kelapa" image={Kelapa} description="" />
            <Card title="Ketela" image={Ketela} description="" />
            <Card title="Kopi" image={Kopi} description="" />
            <Card title="Toga" image={Toga} description="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KomoditasSection;
