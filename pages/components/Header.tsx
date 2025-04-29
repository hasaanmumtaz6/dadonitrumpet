import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import localFont from "next/font/local";

const Hexa = localFont({
  src: "../fonts/Hellix-Regular.ttf",
  variable: "--font-Hellix-Regular",
});

const Header = () => {
  return (
    <header className="Header-container">
      <picture className="logo-box">
        <Image src={logo} alt="logo-pic" />
      </picture>
      <p className={`${Hexa.variable} text-white font-thin`}>
        The sound of soul and fire
      </p>
    </header>
  );
};

export default Header;
