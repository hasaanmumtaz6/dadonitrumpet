import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFileZipper } from "react-icons/fa6";

const Presskit = () => {
  const [zipNoti, setZipNoti] = useState("");

  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/docs/presskit.zip";
    link.setAttribute("download", "presskit.zip");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setZipNoti("presskit.zip downloaded");
    setTimeout(() => {
      setZipNoti("");
    }, 5000);
  }, [zipNoti]);

  return (
    <div className="presskit-zip-page-container">
      <Head>
        <title>Presskit.zip</title>
      </Head>
      <Link
        href="/docs/presskit.zip"
        download="Presskit"
        className="primary-btn"
        onClick={() => {
          setZipNoti("presskit.zip downloaded");
          setTimeout(() => {
            setZipNoti("");
          }, 5000);
        }}
      >
        <FaFileZipper />
        <b>Dowload Zip File</b>
      </Link>
      {zipNoti && <p>{zipNoti}</p>}
    </div>
  );
};

export default Presskit;
