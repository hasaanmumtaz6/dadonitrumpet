import Link from "next/link";
import React from "react";
import { FaFileZipper } from "react-icons/fa6";

const Presskit = () => {
  return (
    <div className="presskit-zip-page-container">
      <h2>Presskit.zip...</h2>
      <p>Under Developemnt</p>
      <Link href="/docs/presskit.zip" download="Presskit" className="primary-btn">
        <FaFileZipper />
        <b>Dowload Zip File</b>
      </Link>
    </div>
  );
};

export default Presskit;
