import Image from "next/image";
import React from "react";
import dadonitrumpet from "@/public/images/dadonitrumpet.svg";
import logo from "@/public/images/dadonitrumpetlogo.svg";
import islandlogo from "@/public/images/islandmedialogo.svg";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import Head from "next/head";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={`${inter.className} layout-contaner`}>
      <Head>
        <title>Dadonitrumpet</title>
      </Head>
      <div className="main-content-container">
        <div className="logo-image-para-box">
          <div className="image-para-box">
            <Image
              className="dadonitrumpet-logo"
              src={logo}
              alt="dadonitrumpet-logo"
            />
            <p className="para-text-line">The sound of soul and fire.</p>
          </div>
          <Image
            className="dadonitrumpet-pic"
            src={dadonitrumpet}
            alt="dadonitrumpet-pic"
          />
        </div>

        <div className="footer">
          <Link href={"https://www.islandmedia.co"} target="_blank">
            <Image src={islandlogo} alt="islandmedia-logo" className="islandmedia-logo" />
          </Link>
          <div className="social-media-icons">
            <Link href={"https://wa.me/38976482936"} target="_blank">
              <RiWhatsappFill />
            </Link>
            <Link
              href={"https://www.instagram.com/dadonitrumpet"}
              target="_blank"
            >
              <RiInstagramFill />
            </Link>
            <Link
              href={"https://www.facebook.com/dadonitrumpet"}
              target="_blank"
            >
              <RiFacebookCircleFill />
            </Link>
            <Link href={"https://linktr.ee/dadonitrumpet"} target="_blank">
              <SiLinktree />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
