import Head from "next/head";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="layout-contaner">
      <Head>
        <title>Dadoni Trumpet</title>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta
          name="keywords"
          content="Dadoni, Trumpet, musician, Musician, musician harbour toen, antiguan musician, Dadoni Trumpet, musician, live music, Caribbean tour, worldwide bookings, trumpet artist, Antigua music, English Harbour Town, jazz trumpet, Caribbean concerts, music performer, live shows, trumpet player"
        />
        <meta
          name="description"
          content="Dadoni Trumpet, a talented musician, brings electrifying performances and good vibes worldwide. Currently touring the Caribbean Islands from Feb 4th to Mar 31st. Bookings available globally: booking@dadonitrumpet.com."
        />
        <meta
          property="og:image"
          content="https://www.dadonitrumpet.com/_next/static/media/logo.f22d30b4.svg"
        />
      </Head>

      <Header />
      <Intro />
      <Footer />
    </main>
  );
};

export default Home;
