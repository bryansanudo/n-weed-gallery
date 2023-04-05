import React, { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import heroVideo from "@/assets/heroVideo.mp4";

const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <section
      name="home"
      className="min-h-screen flex flex-col justify-start items-center text-cente pt-[150px] "
    >
      <p className="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
        GALERÍA
      </p>

      <div className="relative mt-6 mx-4 ">
        <video
          ref={videoRef}
          autoPlay
          src={heroVideo}
          loop
          type="video/mp4"
          playsInline
          muted
          className="rounded-lg shadow-[#ffcdc2] shadow-xl   object-cover w-[600px] h-[500px] lg:h-[600px]"
        />
      </div>
      <div className="absolute top-1/2 left-1/2">
        {isVideoPlaying ? (
          <FaPauseCircle
            size={25}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-105 duration-300 text-[#ffcdc2]"
          />
        ) : (
          <FaPlayCircle
            size={25}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-100 duration-300 text-[#ffcdc2]"
          />
        )}
      </div>

      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
