import React from "react";
import bgFooter from "../assets/bgFooter.svg";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-8"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
      }}
    >
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 my-6 md:my-8 lg:my-10"
        />
        <p className="text-sm md:text-base lg:text-lg">
          <b>&copy; Mengarung Kebonagung</b>
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          KKN-PPM UGM 2024 Periode 2
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-2">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/mengarung.kebonagung?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
