import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/photos" element={<CouplePhotos />} />
      </Routes>
    </Router>
  );
};

const CouplePhotos = () => {
  const photos = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
    "/photos/photo5.jpg",
    "/photos/photo6.jpg",
    "/photos/photo7.jpg",
    "/photos/photo8.jpg",
    "/photos/photo9.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center py-8">
      <h1 className="text-5xl font-bold text-center text-pink-600 mb-10">
        Our Memories
      </h1>

      <div className="grid grid-cols-3 gap-6 w-11/12 max-w-5xl">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group transform hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-white rounded-xl shadow-lg rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300"></div>
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="rounded-xl shadow-md w-full object-cover h-56"
            />
          </div>
        ))}
      </div>

      <footer className="mt-12 text-sm text-gray-600">
        Made with ❤️
      </footer>
    </div>
  );
};

export default App;
