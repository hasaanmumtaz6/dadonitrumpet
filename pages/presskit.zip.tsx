import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaFileZipper } from "react-icons/fa6";

const Presskit = () => {
  const [zipNoti, setZipNoti] = useState("");
  const [buttonText, setButtonText] = useState("Downloading Press Kit");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const audio = new Audio("/audio/achievment.mp3");
    audio.play();

    const link = document.createElement("a");
    link.href = "/docs/presskit.zip";
    link.setAttribute("download", "presskit.zip");
    document.body.appendChild(link);
    link.click();
    link.remove();

    setZipNoti("presskit.zip downloaded");
    setButtonText("Downloaded ✅");

    const timer = setTimeout(() => {
      setZipNoti("");
      setButtonText("Downloading Press Kit");
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setZipNoti("presskit.zip downloaded");
    setButtonText("Downloaded ✅");

    setTimeout(() => {
      setButtonText("Downloading Press Kit");
    }, 10000);
    setTimeout(() => {
      setZipNoti("");
    }, 8000);
  };

  return (
    <div className="presskit-zip-page-container">
      <Head>
        <title>Presskit.zip</title>
      </Head>
      <Link
        href="/docs/presskit.zip"
        download="Presskit"
        className="primary-btn"
        onClick={handleClick}
      >
        <FaFileZipper />
        <b>{buttonText}</b>
      </Link>
      {zipNoti && <p className="animate-pulse select-none">{zipNoti}</p>}
    </div>
  );
};

export default Presskit;
