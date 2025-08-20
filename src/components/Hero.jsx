import React from "react";
import myPhoto from "../assets/profile.jpeg"; // Put your photo in src/assets/

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6"
    >
      {/* Left side - Text */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Pragati Kashyap</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          Full Stack Developer with a passion for building modern, responsive, and user-friendly web applications.
        </p>
        <a
          href="#projects"
          className="inline-block mt-4 bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </div>

      {/* Right side - Image */}
      <div className="mb-10 md:mb-0 md:w-1/2 flex items-center justify-center">
        <img
          src={myPhoto}
          alt="Pragati Kashyap"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
