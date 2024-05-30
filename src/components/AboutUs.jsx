import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { ABOUTUS } from "@/animation";
import Lottie from "react-lottie";
import AboutUsCard from "./AboutUsCard";
import { RocketLaunch, Visibility } from "@mui/icons-material";
const AboutUs = () => {
  const [width, setWidth] = useState(650);
  const [height, setHeight] = useState(550);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ABOUTUS,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (screen.width < 600) {
        setHeight(300);
        setWidth(350);
      }
    }
  }, []);
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-2 mt-10 text-xl text-[#0E89E2] font-bold">
            <div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
            <div>Empowering Innovation, Inspiring Change</div>
            <div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
          </div>
          <h2 className="lg:text-6xl text-xl font-bold text-[#0E89E2] text-center">
            <span className="lg:text-6xl text-xl font-thin text-black text-center">About</span> Us
          </h2>{" "}
        </div>
        <div className={`flex justify-between `}>
          <div className="p-8 text-lg md:text-2xl my-auto font-sans text-gray-500 tracking-wider [word-spacing:5px] md:mx-10">
            <div className="text-2xl md:text-3xl font-medium text-[#0E89E2] ">
              Pioneering Innovation, Empowering Futures
            </div>
            <br />
            Devxel is dedicated to helping high school graduates and college freshmen gain industry-level experience and
            expertise in the field of development. We offer a robust platform where young minds can dive into the world
            of technology, harnessing their potential through comprehensive and hands-on learning experiences. Our goal
            is to bridge the gap between academic knowledge and real-world application, preparing our students for
            successful careers in the tech industry.
          </div>
          <div className="flex justify-end mr-0 right-0 left-auto">
            <Lottie
              options={defaultOptions}
              isPaused={false}
              isClickToPauseDisabled={true}
              height={height}
              width={width}
            />
          </div>
        </div>
        <div className="flex justify-evenly p-5 flex-wrap my-10">
          <a
            href="#"
            class="block max-w-md p-6 m-5 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-lg shadow-2xl ransition-colors dark:bg-gray-800 dark:border-gray-700 transition duration-500 ease-out group hover:scale-95 "
          >
            <div className="bg-[#f70037] flex justify-center items-center p-1 w-10 h-10 rounded-xl mb-2">
              <RocketLaunch color="" fontSize="medium" className="my-3" />
            </div>
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
              {" "}
              <span>Our</span> <span className="text-[#f70037]">Mission</span>
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 ">
              Devxel aims to transform education by providing an enriching, inclusive, and personalized learning
              experience through collaboration, innovation, and evidence-based approaches. We believe in empowering
              students with the skills and confidence they need to excel in an ever-evolving technological landscape.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-md p-6 m-5 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-lg shadow-2xl ransition-colors dark:bg-gray-800 dark:border-gray-700 transition duration-500 ease-out group hover:scale-95 "
          >
            <div className="bg-[#f70037] flex justify-center items-center p-1 w-10 h-10 rounded-xl mb-2">
              <Visibility color="" fontSize="medium" className="my-3" />
            </div>

            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
              <span>Our</span> <span className="text-[#f70037]">Vision</span>
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 ">
              Devxel envisions an educational landscape where students thrive academically, socially, and emotionally
              through innovative methodologies and comprehensive teacher training. Our vision is to create a community
              of learners who are well-equipped to tackle the challenges of the 21st century.
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
