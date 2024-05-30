"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="startupbg relative w-full bg-gray-900 inset-0 flex items-center justify-center flex-col md:min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-white md:text-[15rem] text-5xl  font-bold"
        >
          DevXel
        </motion.h1>
        <div
          className="line w-56"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        ></div>
        <TypeAnimation
          sequence={[
            "Pioneering Innovation", // Types 'One'
            1000, // Waits 1s
            "Empowering Futures", // Deletes 'One' and types 'Two'
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block", padding: "1rem" }}
          className="text-gradient text-xl md:text-4xl bg-gradient-rainbow font-semibold"
        />
      </div>
    </>
  );
};

export default Hero;
