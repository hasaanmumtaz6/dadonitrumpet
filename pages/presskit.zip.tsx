import Head from "next/head";
import React, { useEffect, useRef } from "react";

const Presskit = () => {
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
  }, []);

  return (
    <div className="presskit-zip-page-container">
      <Head>
        <title>Presskit.zip</title>
      </Head>
    </div>
  );
};

export default Presskit;
