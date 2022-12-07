import React from "react";
import { ReactComponent as ArtpieClinicLogoWordmark } from "../assets/logo/artpie-clinic-logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-color-2">
        <div className="mx-auto flex max-w-screen-lg justify-center pt-[3rem]">
          <ArtpieClinicLogoWordmark className="w-[20rem] rounded-t-2xl bg-color-1 fill-color-2 px-[5rem] py-[1.5rem] transition-all" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
