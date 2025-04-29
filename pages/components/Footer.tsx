import Image from "next/image";
import React from "react";
import islandlogo from "@/public/images/islandmedialogo.svg";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href={"https://www.islandmedia.co"} target="_blank">
        <Image
          src={islandlogo}
          alt="islandmedia-logo"
          className="islandmedia-logo"
        />
      </Link>
      <div className="social-media-icons">
        <Link href={"https://wa.me/38976482936"} target="_blank">
          <RiWhatsappFill />
        </Link>
        <Link href={"https://www.instagram.com/dadonitrumpet"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link href={"https://www.facebook.com/dadonitrumpet"} target="_blank">
          <RiFacebookCircleFill />
        </Link>
        <Link href={"https://linktr.ee/dadonitrumpet"} target="_blank">
          <SiLinktree />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
