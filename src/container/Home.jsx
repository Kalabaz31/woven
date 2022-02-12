import React, { useRef } from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Stories from "../components/Stories";
const Home = () => {
  const div = useRef();
  return (
    <div className="bg-neutral-200 flex flex-col w-full relative">
      <Navbar />

      <Slider />

      <div className="absolute top-[60rem] w-full flex flex-col ">
        {/* About */}
        <div className="flex flex-col md:flex-row md:items-center p-10 md:py-20 bg-white gap-4 justify-center">
            <h1 className="text-2xl md:text-4xl w-full md:w-1/2 xl:w-1/4 font-bold tracking-wider text-left md:text-center		">
              design <span className="font-normal italic">and </span> travel
            </h1>
            <div className=" w-full md:w-1/2 xl:w-1/4">
              <h2 className="text-xs text-neutral-900 text-left font-bold">ABOUT US</h2>
              <p className="text-left text-neutral-900">Woven Magazine celebrates artists, designers, and entrepreneurs while exploring the history of design through travel.</p>
            </div>
          </div>

        {/* The Stories */}
        
        <Stories/>


        {/* Footer */}

        <Footer />

      </div>
    </div>
  );
};

export default Home;
