import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      repeat: Infinity,
      duration: 2,
    },
  },
};
const SliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h2 variants={textVariants}>Brian Gatundu</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a variants={textVariants} href="#Projects">
              My Work
            </motion.a>
            <motion.a variants={textVariants} href="#Contact">
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            src="scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={SliderVariants}
        initial="initial"
        animate="animate"
      >
        React Frontend Developer
      </motion.div>
      <div className="imageContainer">
        <img src="profile.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
