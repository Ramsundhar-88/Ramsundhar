import React from "react";
import profileImage from "../assets/ramsundhar.jpg";

const Home = () => (
  <section
    id="home"
    className="pt-24 h-screen flex items-center justify-center px-4 bg-[#0f172a] text-white"
  >
    <div className="text-center">
      <img
        src={profileImage}
        alt="Ram Sundhar"
        className="w-48 md:w-64 h-48 md:h-64 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-600 shadow-2xl"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Hi, I'm Ramsundhar
      </h1>
      <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto">
        Crafting full-stack web experiences that are fast, elegant, and built to scale.
      </p>
    </div>
  </section>
);

export default Home;
