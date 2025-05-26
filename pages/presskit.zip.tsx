import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFileZipper } from "react-icons/fa6";

const Presskit = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/docs/presskit.zip";
    link.setAttribute("download", "presskit.zip");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return (
    <div className="presskit-zip-page-container">
      <Head>
        <title>Presskit.zip</title>
      </Head>
      <Link
        href="/docs/presskit.zip"
        download="Presskit"
        className="primary-btn"
      >
        <FaFileZipper />
        <b>Dowload Zip File</b>
      </Link>
    </div>
  );
};

export default Presskit;
