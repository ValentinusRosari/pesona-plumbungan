import React from "react";
import Card from "./Card";
import bgBlue from "../assets/bgBlue.svg";
import BukitBandung from "../images/BukitBandung.jpg";
import PantaiButun from "../images/PantaiButun.jpg";
import TebingNdampar from "../images/TebingNdampar.jpg";
import WatuPanjang from "../images/WatuPanjang.jpg";
import GoaNyemono from "../images/GoaNyemono.jpg";
import BukitBrenggolo from "../images/BukitBrenggolo.jpg";
import PantaiNgambur from "../images/PantaiNgambur.jpg";
import { useNavigate } from "react-router-dom";

const WisataSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section
      id="wisata"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bgBlue})`, minHeight: "100vh" }}
    >
      <div className="container mx-auto px-4 lg:mt-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Destinasi Wisata
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap space-x-4">
            <Card
              id="bukit-bandung"
              onClick={() => handleCardClick("bukit-bandung")}
              title="Bukit Bandung"
              image={BukitBandung}
              description="Dusun Nyemono"
            />
            <Card
              id="pantai-butun"
              onClick={() => handleCardClick("pantai-butun")}
              title="Pantai Butun"
              image={PantaiButun}
              description="Dusun Nyemono"
            />
            <Card
              id="tebing-ndampar"
              onClick={() => handleCardClick("tebing-ndampar")}
              title="Tebing Ndampar"
              image={TebingNdampar}
              description="Dusun Nyemono"
            />
            <Card
              id="watu-panjang"
              onClick={() => handleCardClick("watu-panjang")}
              title="Watu Panjang"
              image={WatuPanjang}
              description="Dusun Krajan"
            />
            <Card
              id="goa-nyemono"
              onClick={() => handleCardClick("goa-nyemono")}
              title="Goa Nyemono"
              image={GoaNyemono}
              description="Dusun Nyemono"
            />
            <Card
              id="bukit-brenggolo"
              onClick={() => handleCardClick("bukit-brenggolo")}
              title="Bukit Brenggolo"
              image={BukitBrenggolo}
              description="Dusun Tenggar"
            />
            <Card
              id="pantai-ngambur"
              onClick={() => handleCardClick("pantai-ngambur")}
              title="Pantai Ngambur"
              image={PantaiNgambur}
              description="Dusun Nyemono"
            />
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisataSection;
