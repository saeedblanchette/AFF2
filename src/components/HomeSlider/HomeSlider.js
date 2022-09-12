import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCreative } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-creative';
import Slides from './SlidesData';
// const animation = {
//   offscreen: {
//     x: -90,
//     // y: 120,

//     opacity: 1,
//     scale: 0.9,
//     width: '70%',

//     // transform: "rotate(180deg)",
//   },
//   onscreen: {
//     x: 0,
//     // y: 0,
//     opacity: [0.9, 0.8, 0],
//     scale: 1,
//     width: '0',

//     transition: {
//       type: 'spring',
//       bounce: 0.1,
//       duration: 4,
//     },
//   },
// };
const animationText = {
  offscreen: {
    x: -100,
    // y: 120,

    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    x: 0,
    // y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 20,
    },
  },
};
// const VisionText = {
//   offscreen: {
//     // y: 120,

//     opacity: 0,
//   },
//   onscreen: {
//     // y: 0,
//     opacity: 1,

//     transition: {
//       type: 'spring',

//       duration: 3,
//     },
//   },
// };

const subTitleAnimation = {
  offscreen: {
    x: -100,
    // y: 120,

    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    x: 0,
    // y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 30,
    },
  },
};
const buttonAnimation = {
  offscreen: {
    x: -10,
    // y: 120,

    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    x: 0,
    // y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 40,
    },
  },
};
const HomeSlider = () => {
  const pagination = {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet bg-gray-500 m-2 rounded-full p-0 bg-gray-100 text-gray-100',
    bulletActiveClass: 'bg-gray-500 m-2 rounded-full p-0 bg-yellow-100 swiper-pagination-bullet-active',
    renderBullet: function (index, className) {
      return '<span className=" ' + className + ' "></span>';
    },
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect="creative"
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCreative]}
        centeredSlides
        autoplay={{ delay: 7000 }}
        navigation
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 100, -200],
            scale: 0.1,
            origin: 'bottom center',
          },
          next: {
            origin: 'bottom center',
            translate: [0, 100, -200],
            scale: 0.2,
          },
        }}
        centeredSlidesBounds
        // pagination={true}
        pagination={pagination}
      >
        {Slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[90vh] w-[100vw] max-h-[1000px] max-w-[900px]} relative"
              style={{ backgroundColor: 'rgba(88,85,78,0.2)' }}
            >
              <Image alt="SLIDER" src={item.image} layout="fill" className="w-full h-full" />

              <motion.div className="absolute bottom-1/4  left-[10%] z-9  h-96 w-1/2 text-slate-50 p-2">
                <motion.h1
                  variants={animationText}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  className="text-natural-50 font-bold  text-slate-50 text-6xl "
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  className="text-2xl py-4 font-semibold"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  variants={subTitleAnimation}
                >
                  {item.description}
                </motion.p>
                <motion.button
                  className="btn btn-primary bg-yellow-300 hover:bg-yellow-200  my-10  text-gray-800 m-auto "
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.8 }}
                  variants={buttonAnimation}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
