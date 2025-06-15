import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-[80vh] overflow-hidden relative">
        <img
          src="/hero.jpg"
          alt="hero image"
          className="h-full w-auto object-cover"
        />
        <div className="absolute top-1/2 left-14 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">E-commerce</h1>
          <h3 className="text-2xl md:text-4xl font-bold">Search Products</h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
