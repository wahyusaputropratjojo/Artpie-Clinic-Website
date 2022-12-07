import React from "react";
import HeroSection from "./HeroSection";
import FirstSection from "./FirstSection";
import LokasiSection from "./LokasiSection";
import LayananSection from "./LayananSection";
import TentangSection from "./TentangSection";
import GaleriSection from "./GaleriSection";

const Beranda = () => {
  return (
    <>
      <main>
        <HeroSection />
        <FirstSection />
        <GaleriSection />
        <LayananSection />
        <LokasiSection />
        <TentangSection />
      </main>
    </>
  );
};

export default Beranda;
