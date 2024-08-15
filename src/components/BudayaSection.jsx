import React from "react";
import bgGreen from "../assets/bgGreen.svg";
import Card from "./Card";
import BersihDesa from "../images/BersihDesa.jpg";
import Tayub from "../images/Tayub.jpg";
import Persatu from "../images/Persatu.jpg";
import TariKreasi from "../images/TariKreasi.jpg";
import MakamPundung from "../images/MakamPundung.jpg";
import WadahDupa from "../images/WadahDupa.jpg";
import { useNavigate } from "react-router-dom";

const BudayaSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section
      id="budaya"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bgGreen})`, height: "100vh" }}
    >
      <div className="container mx-auto px-4 lg:mt-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Objek Budaya
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap space-x-4">
            <Card
              id="bersih-desa"
              onClick={() => handleCardClick("bersih-desa")}
              title="Bersih Desa (Longkangan)"
              image={BersihDesa}
              description="Adat Istiadat"
            />
            <Card
              id="tayub"
              onClick={() => handleCardClick("tayub")}
              title="Tayub"
              image={Tayub}
              description="Seni Tradisional"
            />
            <Card
              id="persatu"
              onClick={() => handleCardClick("persatu")}
              title="Persatu"
              image={Persatu}
              description="Seni Tradisional"
            />
            <Card
              id="tari-kreasi"
              onClick={() => handleCardClick("tari-kreasi")}
              title="Tari Kreasi"
              image={TariKreasi}
              description="Seni Tradisional"
            />
            <Card
              id="makam-pundung"
              onClick={() => handleCardClick("makam-pundung")}
              title="Makam Pundung"
              image={MakamPundung}
              description="Cagar Budaya"
            />
            <Card
              id="wadah-dupa"
              onClick={() => handleCardClick("wadah-dupa")}
              title="Wadah Dupa"
              image={WadahDupa}
              description="Benda Bersejarah"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudayaSection;
