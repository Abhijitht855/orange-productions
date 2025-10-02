"use client";

import React, { useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";

export default function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="p-4 sm:p-8 bg-white">
        <div className="relative w-full max-w-7xl mx-auto mt-10 rounded-[2rem] overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-[32rem] sm:h-[42rem] object-cover rounded-[2rem]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/x4fa4f3ce9_large.mp4" type="video/mp4" />
      </video>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition text-2xl sm:text-3xl"
      >
        {isPlaying ? <CiPause1 /> : <CiPlay1 />}
      </button>
    </div>
    </section>
  );
}
