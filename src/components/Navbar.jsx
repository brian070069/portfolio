import React from "react";
import { motion } from "framer-motion";
import SideBar from "./sideBar/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gatu Dev
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.a href="">
            <img src="facebook.png" alt="facebook" />
          </motion.a>
          <motion.a href="">
            <img src="dribbble.png" alt="dribble" />
          </motion.a>
          <motion.a href="">
            <img src="youtube.png" alt="youtube" />
          </motion.a>
          <motion.a href="">
            <img src="instagram.png" alt="instagram" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
