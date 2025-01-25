import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import backgroundMusic from "./assets/Song.mp3";

const App = () => {
  return (
    <Router>
      <AudioPlayer /> {/* Moved audio player here globally */}
      <Routes>
        <Route path="/photos" element={<CouplePhotos />} />
        <Route path="/" element={<ValentinePage />} />
      </Routes>
    </Router>
  );
};

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.3; // Set initial volume
      const playAudio = () => {
        audio.play().catch((error) => {
          console.error("Autoplay failed. Waiting for user interaction:", error);
        });
      };

      // Try to autoplay
      playAudio();

      // Add event listener for user interaction
      window.addEventListener("click", playAudio);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("click", playAudio);
      };
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={backgroundMusic} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

const ValentinePage = () => {
  const [noCount, setNoCount] = React.useState(0);
  const [yesPressed, setYesPressed] = React.useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Wu nawwww",
      "Puu Puuu nawwwwww",
      "Wu Paw nawwwwwwwwww",
      "Waw Pu nawwwwwwwwwwww",
      "Pweeeees",
      "Heyyyyyyyyyyy",
      "Don't make Koko sad D :",
      "D :",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!! : D
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will Wu be Koko's Valentine? : D
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

const CouplePhotos = () => {
  const photos = [
    "/Image 1.jpg",
    "/Image 2.jpg",
    "/Image 3.jpg",
    "/Image 4.jpg",
    "/Image 5.jpg",
    "/Image 6.jpg",
    "/Image 7.jpg",
    "/Image 8.jpg",
    "/Image 9.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center py-8">
      <h1 className="text-5xl font-bold text-center text-pink-600 mb-10">
        Our Memories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 max-w-5xl">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative bg-white rounded-xl shadow-lg rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300 p-2">
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="rounded-xl shadow-md w-full object-cover h-[500px]"
              />
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back to Main Page
      </Link>

      <footer className="mt-12 text-sm text-gray-600">
        Made with ❤️
      </footer>
    </div>
  );
};

const Footer = () => {
  return (
    <Link
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      to="/photos"
    >
      Made with {" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Link>
  );
};

export default App;
