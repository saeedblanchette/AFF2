import React from 'react';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import Image from 'next/image';
import SustainableSvg from '../SvgIcons/SustainableSvg/SustainableSvg';
import SynergySvg from '../SvgIcons/SynergySvg';
import BussinessSvg from '../SvgIcons/BussinessSvg';
import InnovationSvg from '../SvgIcons/Innovation';
const animation = {
  offscreen: {
    //  x: 300,
    y: 120,
    opacity: 0.3,
    scale: 0.8,
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
const valuesList = [
  {
    title: 'Sustainable solutions',
    image: '/images/Capture d’écran 2022-08-17 à 17.19.44.png',
    icon: <SustainableSvg className="fill-yellow-500 h-40 w-40 m-auto " />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elito Sllamcorper est massa pretium   egetas Sagittis nulla cursus Lorem ipsum dolor sit amet',
  },

  {
    title: 'Strategic synergy',
    image: '/images/Capture d’écran 2022-08-17 à 17.19.44.png',
    icon: <SynergySvg className="fill-yellow-500 h-40 w-40 m-auto " />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elito Sllamcorper est massa pretium   egetas Sagittis nulla cursus Lorem ipsum dolor sit amet',
  },
  {
    title: 'Business activities',
    image: '/images/Capture d’écran 2022-08-17 à 18.03.49.png',
    icon: <BussinessSvg className="fill-yellow-500 h-40 w-40 m-auto " />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elito Sllamcorper est massa pretium   egetas Sagittis nulla cursus Lorem ipsum dolor sit amet',
  },
  {
    title: 'Useful innovation',
    image: '/images/Capture d’écran 2022-08-17 à 18.03.49.png',
    icon: <InnovationSvg className="fill-yellow-500 h-40 w-40 m-auto " />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elito Sllamcorper est massa pretium   egetas Sagittis nulla cursus Lorem ipsum dolor sit amet',
  },
];
const OurValues = (props) => {
  return (
    <section className="OurValues container px-16 mx-auto mt-20 lg:py-28 ">
      <motion.h1
        className="text-4xl  p-2 h-40 py-20  leading-normal  text-gray-700 m-auto text-center uppercase"
        variants={animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        Our Values
      </motion.h1>

      <div className="flex  justify-between">
        {valuesList.map((item, i) => (
          <motion.div
            className="cart p-6 shadow-2xl m-2 w-80  rounded-3xl"
            key={i}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            variants={animation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            {/* <Image
              src={item.image}
              width="350"
              alt="ddd"
              height="350"
              className=" m-auto  object-fill h-56"
            /> */}
            {item.icon}
            <div className=" py-2">
              <h3 className="font-bold text-xl  py-3  text-center text-gray-700">{item.title}</h3>
              <p className="text-gray-700  text-center  text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

OurValues.propTypes = {};

export default OurValues;
