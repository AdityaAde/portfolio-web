"use client";

import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Aditya Ade", 1000, "Mobile Developer", 1000]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique necessitatibus maiores consequatur eum nisi, fuga sunt
            distinctio molestias saepe doloremque, magni dolore blanditiis hic
            perspiciatis reprehenderit nihil officia aspernatur?
          </p>
          <div>
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Download CV
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/hero-image.jpg"}
              alt="hero image"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
