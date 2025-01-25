import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import backgroundMusic from "./assets/Song.mp3";

// Centralized array of photos with an optional text property for each.
const photos = [
  { src: "/Image 4.jpg", text: "[8-July-2023] We baked a cake happily together. It was the best to do things together with Puu Puu. And the cake turned out nice and funny : D" },
  { src: "/Image 3.jpg", text: "[26-July-2023] We went and ate at Seafood city with Mu. Salmon was great but Koko's girl is the greatest. 💖" },
  { src: "/Image 6.jpg", text: "[21-Aug-2023] Last aunn aunn aunn before coming to the UK 😎"},
  { src: "/Image 2.jpg", text: "[23-Aug-2023] We were dating at Junction City and Koko followed Puu Puu into the changing room xd 😎" },
  { src: "/Image 5.jpg", text: "[25-Aug-2023] We played bowling near Victoria Hospital, and we hanged out with friends as well. Koko and Puu Puu are lovey dovey as always." },
  { src: "/Image 1.jpg", text: "[26-Aug-2023] This is a few weeks before we came to the UK. Koko and Puu Puu were at Chill Out cafe in San Chaung and we had such a fun date. 💖" },
  { src: "/Image 10.jpg", text: "[26-Aug-2023] This is on the same day as our Chill Out cafe date. It's at our fav drink place Cha Tra Mue and we had lots of lovey dovey memories there." },
  { src: "/Image 8.jpg", text: "[14-Feb-2024] We went shopping at City Center on Valentine's Day a year ago. It was one of the happiest years for Koko, to spend time with my precious Wu." },
  { src: "/Image 9.jpg", text: "[28-Dec-2024] Koko took you out to view the light cycles and it was a very magical evening spent with my magical girl ✨" },
];

const App = () => {
  return (
    <Router>
      <AudioPlayer />
      <Routes>
        <Route path="/photos" element={<CouplePhotos />} />
        {/* New dynamic route for individual photo pages */}
        <Route path="/photos/:id" element={<PhotoPage />} />
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
      audio.volume = 0.3;
      const playAudio = () => {
        audio.play().catch((error) => {
          console.error("Autoplay failed. Waiting for user interaction:", error);
        });
      };

      // Attempt to autoplay
      playAudio();

      // Add event listener for user interaction
      window.addEventListener("click", playAudio);

      // Cleanup
      return () => {
        window.removeEventListener("click", playAudio);
      };
    }
  }, []);

  return (
    <audio ref={audioRef} loop volume="0.3">
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
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="text-4xl md:text-6xl font-bold my-4 text-purple-600">
            Ok Yayyyyy!!! : D
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
            alt="All you need is love"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
            alt="Love in the air"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear with Roses"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center text-purple-600">
            Will Wu be Koko's Valentine? : D
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
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

// Displays the grid of 9 photos
const CouplePhotos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center py-8">
      <h1 className="text-5xl font-bold text-center text-pink-600 mb-10">
        Our Lovey Dovey Memories, click on photos!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 max-w-5xl">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {/* Link to the dynamic route /photos/:id */}
            <Link to={`/photos/${index}`}>
              <div className="relative bg-white rounded-xl shadow-lg rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300 p-2">
                <img
                  src={photo.src}
                  alt={`Memory ${index + 1}`}
                  className="rounded-xl shadow-md w-full object-cover h-[500px]"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back to Main Page
      </Link>

      <footer className="mt-12 text-sm text-gray-600">Made with ❤️</footer>
    </div>
  );
};

// New component to display a single photo and some text
const PhotoPage = () => {
  // useParams grabs the :id from the route
  const { id } = useParams();
  // Convert id to a number and get the photo
  const photoIndex = parseInt(id, 10);
  const photo = photos[photoIndex];

  // If the user manually enters a path out of range, handle it:
  if (!photo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
        <h2 className="text-2xl text-red-500">Photo not found!</h2>
        <Link
          to="/photos"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Back to Photos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-pink-100 to-purple-200 p-8">
      {/* Photo at top center */}
      <img
        src={photo.src}
        alt={`Memory ${photoIndex + 1}`}
        className="w-full max-w-md rounded-lg shadow-md mb-6"
      />
      {/* Some text in the middle */}
      <div className="text-center text-3xl md:text-4xl font-bold text-pink-600 mb-6">
        {photo.text}
      </div>
      {/* Back button */}
      <Link
        to="/photos"
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back to Photos
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <Link
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      to="/photos"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </Link>
  );
};

export default App;

