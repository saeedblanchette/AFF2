import Head from 'next/head';
// import Image from 'next/image';
// import Carousel from '../components/Carousel';
import Footer from '../components/Layout/Footer';
import Navigation from '../components/Layout/Navigation';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

import { motion } from 'framer-motion';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import HomeSlider from '../components/HomeSlider';
import Timeline from 'components/Timeline';

const cardVariantsRight = {
  offscreen: {
    //  x: 300,
    y: 120,
    opacity: 0.3,
  },
  onscreen: {
    // x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 2,
    },
  },
};

const variantMoveToRight = {
  offscreen: {
    // x: -300,
    y: 120,
    opacity: 0.3,
  },
  onscreen: {
    // x: 0,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 2,
    },
  },
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {/* <Carousel /> */}
      <HomeSlider />
      {/* <Skeleton containerClassName="h-90" height={600} /> */}
      <motion.section
        className="container px-16 m-auto "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <section className="flex flex-col py-6">
          <motion.div className=" text-lg lg:text-4xl text-center  text-slate-600 py-4 " variants={variantMoveToRight}>
            Our Story
          </motion.div>
          <motion.div className="col-span-4 flex flex-col lg:py-28 " variants={cardVariantsRight}>
            <h1 className=" text-2xl lg:text-6xl text-yellow-500 font-bold m-2 p-2 px-4  pt-10 leading-normal text-center">
              In-depth knowledge of the world cereal market..
            </h1>
          </motion.div>
        </section>
      </motion.section>
      <motion.section
        className="container  px-6 lg:px-16 lg:py-28 m-auto  bg-yellow-300  h-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        id="founder"
      >
        <section className="grid lg:grid-cols-6  lg:gap-x-10 drop-shadow-xl ">
          <motion.div
            className="col lg:col-span-2 p-10  image  self-center m-auto justify-self-center"
            variants={variantMoveToRight}
          >
            <Skeleton containerClassName="h-10  m-auto  rounded-3xl " height={300} width={400} />
          </motion.div>
          <motion.div className="col lg:col-span-4 flex flex-col m-auto" variants={cardVariantsRight}>
            <div className="flex m-auto  py-4">
              <FaQuoteLeft className=" text-lg lg:text-6xl basis-2/5 drop-shadow-xl " />
              <div className=" text-lg lg:text-3xl  py-6  font-bold leading-normal  text-gray-700 flex-auto   text-center self-center">
                You will often be called dreamers before seeing the Visionary in you me
                <p className="text-sm col-span-1 py-4">
                  Mohamed Essalhi <br />
                  <span>Founder</span>
                </p>
              </div>
              <FaQuoteRight className=" text-lg lg:text-6xl  self-end basis-2/5 drop-shadow-xl " />
            </div>
          </motion.div>
          <motion.div className="col lg:col-span-6 p-10    m-auto justify-self-center">
            <p className=" text-lg lg:text-2xl font-semibold">
              It is the story of a man who has always believed in innovation and knew how to revolutionize his market.
              He began with a traditional mill that crushed local and imported barley to produce barley semolina and
              became a key figure the field of grain industry
            </p>
          </motion.div>
        </section>
      </motion.section>
      {/* <LogoCarousel /> */}
      <Timeline />

      <motion.section
        className="container  px-6 lg:px-16 lg:py-28 m-auto  bg-yellow-300  h-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <section className="grid lg:grid-cols-6  lg:gap-x-10 drop-shadow-xl ">
          <motion.div className="col lg:col-span-4 flex flex-col m-auto" variants={cardVariantsRight}>
            <div className="flex m-auto  py-4">
              <FaQuoteLeft className=" text-lg lg:text-6xl basis-2/5 drop-shadow-xl " />
              <div className=" text-lg lg:text-3xl  py-6  font-bold leading-normal  text-gray-700 flex-auto   text-center self-center">
                over the years, our employees, customers, partners and suppliers have, each in their own way, marked our
                history and contributed to our development. I would like to thank them warmly for their support and
                loyalty
                <p className="text-sm col-span-1 py-4">
                  Ahmed CHERMATI <br />
                  <span>Chairman of the management board</span>
                </p>
              </div>
              <FaQuoteRight className=" text-lg lg:text-6xl  self-end basis-2/5 drop-shadow-xl " />
            </div>
          </motion.div>
          <motion.div
            className="col lg:col-span-2 p-10  image  self-center m-auto justify-self-center"
            variants={variantMoveToRight}
          >
            <Skeleton containerClassName="h-10  m-auto  rounded-3xl " height={300} width={400} />
          </motion.div>
        </section>
      </motion.section>

      <Footer />
    </div>
  );
}