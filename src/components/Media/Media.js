import React from 'react';
import { motion } from 'framer-motion';
import { TiArrowRightThick } from 'react-icons/ti';
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
const MediaList = [
  {
    title: 'recettes',
    image: '/images/Capture d’écran 2022-08-17 à 17.19.44.png',
    description:
      'Ce texte genere aleatoirement pour etre utilise dans les maquettes webdesign sites internet livres, affiches',
  },

  {
    title: 'Articles',
    image: '/images/Capture d’écran 2022-08-17 à 17.19.44.png',
    description:
      ' Ce texte genere aleatoirement pour etre utilise dans les maquettes  webdesign sites internet livres, affiches',
  },
  {
    title: 'Event',
    image: '/images/Capture d’écran 2022-08-17 à 18.03.49.png',
    description:
      'Ce texte genere aleatoirement pour etre utilise dans les maquettes webdesign sites internet livres, affiches',
  },
];
const Media = () => {
  return (
    <section className="media flex flex-col justiy-between py-2 my-6 container px-16 mx-auto ">
      <motion.h1
        className="text-4xl  p-2 h-40 py-20  leading-normal  text-gray-700 m-auto text-center uppercase"
        variants={animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        media
      </motion.h1>

      <div className="flex  justify-between lg:py-10  ">
        {MediaList.map((item, i) => (
          <motion.div
            className="cart bg-white  shadow-2xl m-2 w-96   rounded-3xl border-2"
            key={i}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            variants={animation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={item.image}
              alt="textsd dsfsqdfd"
              width="350"
              height="450"
              className=" m-auto rounded-bl-3xl rounded-br-3xl  rounded-3xl object-fill h-80 px-4 pt-4"
            />
            <div className="py-4">
              <h3 className="font-bold text-lg  pt-2 px-8 ">{item.title}</h3>
              <p className="text-gray-700  px-8  ">{item.description}</p>
            </div>
            <a
              className="inline-block text-sm  font-bold py-2 bg-yellow-500   w-full  text-center p-4   rounded-br-3xl rounded-bl-3xl "
              href=""
            >
              Read more
              <TiArrowRightThick className=" inline fa-solid fa-play mx-2 link hover:underline" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Media;
