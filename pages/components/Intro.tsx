import Image from "next/image";
import React from "react";
import dadoni from "@/public/images/dadoni.png";
import localFont from "next/font/local";


const Hexa = localFont({
  src: "../fonts/Hellix-Regular.ttf",
  variable: "--font-Hellix-Regular",
});

const Intro = () => {
  return (
    <section className="intro-container">
      <span className="intro-para-box">
        <p className={`${Hexa.variable}`}>
          Dadoni, a dynamic professional trumpeter since 1995, delivering
          electrifying performances that fuse House, Jazz, Afro, Latin, Soul and Funk
          into an unforgettable experience.
        </p>

        <p className={`${Hexa.variable}`}>
          {"•"} A true showman, captivating audiences around the world — from
          the sun-soaked beaches of St. Maarten {"("}Elev8, Heineken Regatta,
          Kalatua Beach Bar, Rainbow Café
          {")"} and Antigua {"("}Ministry of Sound, The Hut, Abracadabra,
          Antigua Yacht Show, Hodges Bay Resort, Maia South Point{")"} to the
          luxury stages of St. Barth {"("}Gyp Sea Beach{")"}, Mallorca {"("}Oceans Beach Club, Estela Super
          Yacht Show{")"}, Monaco {"("}Monaco Yacht Show, La Rascasse{")"}, and
          beyond {"("}Malta, Serbia, Montenegro, Greece, Albania and Macedonia{")"}.
        </p>

        <p className={`${Hexa.variable}`}>
          {"•"} Has shared the spotlight with some of the biggest names in
          music, including legendary house diva Barbara Tucker, the iconic Sandy
          Rivera, the powerhouse Nomis, electrifying ConTruDj, and Grammy
          Award-winning reggae sensation Original Koffee.{" "}
        </p>

        <p className={`${Hexa.variable}`}>
          {"•"} Whether performing for elite yacht shows, exclusive beach clubs,
          or massive international festivals, always delivers an energetic,
          soul-stirring experience that leaves audiences wanting more.
        </p>
      </span>

      <picture className="intro-box-dadoni-pic">
        <Image src={dadoni} alt="i-am-dadonitrumpet" />
      </picture>
    </section>
  );
};

export default Intro;
