import Image from 'next/image';
import React from 'react';
// import Skeleton from "react-loading-skeleton";
import { motion } from 'framer-motion';
const animation = {
  offscreen: {
    //  x: 300,
    y: 120,
    opacity: 0.3,
    scale: 0.9,
  },
  onscreen: {
    // x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 2,
    },
  },
};
const animationBrand = {
  offscreen: {
    //  x: 300,
    y: 120,
    opacity: 0.3,
    scale: 0.2,
  },
  onscreen: {
    // x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 2,
    },
  },
};
const index = () => {
  return (
    <motion.section className="container px-16 lg:py-28  m-auto  bg-yellow-300">
      <motion.h1
        className="text-4xl m-2 p-2 h-40  leading-normal  text-gray-700 m-auto text-center uppercase"
        variants={animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        A SELECTION OF OUR BRANDS
      </motion.h1>
      <div className="grid grid-cols-5   m-auto gap-8 ">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="col self-center text-center "
          variants={animationBrand}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            alt=""
            className="h-30 w-30 grayscale hover:grayscale-0"
            src="/images/Brands/kholala.png"
            height={150}
            width={150}
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={animationBrand}
          className="col  self-center text-center "
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            alt=""
            className="h-30 w-30 grayscale hover:grayscale-0"
            height={100}
            width={150}
            src="/images/Brands/Najma.png"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={animationBrand}
          className="col  self-center text-center"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            alt=""
            className="h-30 w-30 grayscale hover:grayscale-0"
            height={100}
            width={150}
            src="/images/Brands/Rhamna.png"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={animationBrand}
          className=" col  self-center  text-center "
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            alt=""
            className="h-30 w-30 grayscale hover:grayscale-0"
            height={100}
            width={150}
            src="/images/Brands/Eddik.png"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={animationBrand}
          className="col  self-center  text-center "
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            alt=""
            className="h-30 w-30 grayscale hover:grayscale-0"
            height={100}
            width={150}
            src="/images/Brands/CasaGrains.png"
          />
        </motion.div>
      </div>
      <motion.div
        className="w-full flex  justify-between justify-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={animationBrand}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        <button className="btn btn-primary bg-gray-800 hover:bg-gray-500  my-10  text-yellow-500 m-auto  ">
          View all brands
        </button>
      </motion.div>
    </motion.section>
  );
};

export default index;
