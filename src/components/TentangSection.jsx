import React from "react";
import TentangImage from "../images/TentangImage.svg";
import PetaPlumbungan from "../images/PetaPlumbungan.svg";

const TentangSection = () => {
  return (
    <section
      id="tentang"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${TentangImage})`, minHeight: "100vh" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-full max-w-6xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-center lg:text-left">
            Tentang Plumbungan
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/3 mb-4 lg:mb-0">
              <img
                src={PetaPlumbungan}
                alt="Plumbungan Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-2/3 text-white lg:pl-8">
              <p className="text-sm md:text-lg text-center lg:text-left">
                Desa Plumbungan dengan luas 746,90 hektar dan jumlah penduduk
                1.161 jiwa memiliki beragam mata pencaharian seperti petani,
                nelayan, dan peternak. Desa ini terdiri dari 4 Dusun dan 9 RT.
                Desa ini memiliki banyak potensi wisata mulai dari keindahan
                alam hingga kuliner. Di berbagai pantai dan bukit, pengunjung
                dapat menikmati pemandangan kota Pacitan dan hamparan pantai
                yang masih tersembunyi. Spot-spot ini dapat dikembangkan sebagai
                tempat foto, lokasi memancing, camping ground, dan masih banyak
                lagi. Selain itu, hasil dari pertanian, perkebunan, dan hasil
                laut dapat diolah menjadi makanan khas desa yang akan
                meningkatkan nilai jual komoditas tersebut. Dengan semua potensi
                tersebut, Plumbungan dapat disebut sebagai desa dengan kekayaan
                alam yang indah, menawarkan pengalaman wisata yang memikat dan
                beragam, serta potensi ekonomi yang menjanjikan bagi masyarakat
                setempat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangSection;
