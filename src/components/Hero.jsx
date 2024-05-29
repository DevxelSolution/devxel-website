"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ContactUsModal from './ContactUsModal';

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  // if (typeof document !== 'undefined') {
  //   var cursor = document.getElementById("newCursor");
  //   document.addEventListener("mousemove", function (e) {
  //     var x = e.clientX;
  //     if (x <= 1150) cursor.style.left = x - 120 + "px";
  //     if (x < 55) cursor.style.left = -55 + "px";
  //     if (x > 1150) cursor.style.left = screen.width - 400 + "px";
  //     if (screen.width > 1100) {
  //       cursor.style.left = x - 100 + "px";
  //     }
  //     if (screen.width < 1100) {
  //       if (x >= screen.width - 250) cursor.style.left = x - 280 + "px";
  //     }
  //     if (screen.width < 768) {
  //       cursor.style.left = screen.width - 255 + "px";
  //     }
  //     if (screen.width < 700) {
  //       cursor.style.left = screen.width - 230 + "px";
  //     }
  //     if (screen.width < 650) {
  //       cursor.style.left = screen.width - 220 + "px";
  //     }
  //     if (screen.width < 577) {
  //       cursor.style.left = screen.width - 140 + "px";
  //     }
  //   });
  // }

  return (
    <>
    <ContactUsModal open={openModal} handleClose={() => setOpenModal(false)} />
      <div className="relative w-full">
        <img
          src="https://assets-global.website-files.com/629475b2d37416917c4f2ef2/6295bb69332851c2f0dafd58_Wave.svg"
          alt="bg Image"
          className="lg:-my-24 mt-24"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-pretty">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-white md:text-[15rem] text-5xl md:-mt-48 font-bold text-pretty"
          >
            DevXel
          </motion.h1>
          <TypeAnimation
            sequence={[
              'Pioneering Innovation', // Types 'One'
              1000, // Waits 1s
              'Empowering Futures', // Deletes 'One' and types 'Two'
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block', padding: "1rem" }}
            className="text-gradient bg-gradient-rainbow font-semibold"
          />
        </div>
      </div>

      <div
        id="newCursor"
        className="hidden md:block absolute left-0 bottom-0 mx-5 newCursor animate-pulse"
        onClick={() => setOpenModal(true)}
      >
        <img src="/robot.png" alt="DevXel Contact" className="h-60 bot" />
      </div>
    </>
  );
};

export default Hero;
