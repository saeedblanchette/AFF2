import React from 'react';
import { motion } from 'framer-motion';
const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: '#facc15',
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 2,
    },
  },
};
const SynergySvg = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" id="team" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="_24x24_user--dark" data-name="24x24/user--dark" className={className}>
        <rect id="Rectangle" width="24" height="24" fill="none" />
      </g>
      <motion.path
        id="Combined_Shape"
        data-name="Combined Shape"
        d="M0,12.106C0,8.323,4.5,9.08,4.5,7.567a2.237,2.237,0,0,0-.41-1.513A3.5,3.5,0,0,1,3,3.4,3.222,3.222,0,0,1,6,0,3.222,3.222,0,0,1,9,3.4,3.44,3.44,0,0,1,7.895,6.053,2.333,2.333,0,0,0,7.5,7.567c0,1.513,4.5.757,4.5,4.54,0,0-1.195.894-6,.894S0,12.106,0,12.106Z"
        transform="translate(6 8)"
        fill="none"
        // stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className={className}
        variants={icon}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="visible"
      />
      <motion.path
        id="Combined_Shape-2"
        data-name="Combined Shape"
        d="M4.486,12.967c-.569-.026-1.071-.065-1.512-.114A6.835,6.835,0,0,1,0,12.106C0,8.323,4.5,9.08,4.5,7.567a2.237,2.237,0,0,0-.41-1.513A3.5,3.5,0,0,1,3,3.4,3.222,3.222,0,0,1,6,0,3.222,3.222,0,0,1,9,3.4"
        transform="translate(1 3)"
        fill="none"
        // stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className={className}
        variants={icon}
        initial="hidden"
        // animate="visible"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="visible"
      />
      <motion.path
        id="Combined_Shape-3"
        data-name="Combined Shape"
        d="M-4.486,12.967c.569-.026,1.071-.065,1.512-.114A6.835,6.835,0,0,0,0,12.106C0,8.323-4.5,9.08-4.5,7.567a2.237,2.237,0,0,1,.41-1.513A3.5,3.5,0,0,0-3,3.4,3.222,3.222,0,0,0-6,0,3.222,3.222,0,0,0-9,3.4"
        transform="translate(23 3)"
        fill="none"
        // stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        className={className}
        variants={icon}
        initial="hidden"
        // animate="visible"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="visible"
        whileHover="visible"
      />
    </svg>
  );
};

export default SynergySvg;
