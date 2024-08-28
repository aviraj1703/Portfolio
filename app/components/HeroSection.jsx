"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="/">
      <div className="grid grid-cols-1 md:grid-cols-12 px-4 xl:px-8 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 flex flex-col justify-center"
        >
          <h1 className="text-secondary text-4xl text-center sm:text-left lg:text-7xl font-extrabold my-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-300">
              Hello, I&apos;m
            </span>
            <br />
            <br />
            <TypeAnimation
              sequence={[
                "Aviraj",
                1000,
                "Web Developer",
                1000,
                "Mobile Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
          <p className="text-[#808080] text-base text-center sm:text-left sm:text-lg lg:text-xl mb-6">
            <b className="text-secondary">Associate Solution Leader</b> @Brane
            Enterprises Private Limited.
          </p>
          <div>
            <Link href="#contact">
              <button className="shadow-md px-6 py-3 mr-4 w-full sm:w-fit mb-2 font-extrabold bg-gradient-to-br from-primary-500 via-primary-300 to-primary-600 rounded-lg">
                Hire me
              </button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1anX5-1hrNwOGBjl_Q4y3X9_IwshwTRrN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="shadow-md px-1 py-1 mb-2 w-full sm:w-fit rounded-xl border-2 bg-clip-border bg-gradient-to-br from-primary-500 via-primary-300 to-primary-600">
                <span className="px-5 py-2 hover:bg-slate-100 bg-white block rounded-lg text-primary-400">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-300">
                    View Resume
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 md:col-span-5 flex justify-center mt-4 lg:mt-0"
        >
          <div className="rounded-lg shadow-md bg-[#f9fafb] w-[270px] h-[270px] lg:w-[370px] lg:h-[370px] relative flex items-end justify-center">
            <Image
              src="/Profile.png"
              height={310}
              width={310}
              className="object-contain"
              alt="Aviraj's image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
