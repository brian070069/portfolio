import React from "react";
import { motion } from "framer-motion";
import SideBar from "./sideBar/SideBar";

const Navbar = () => {
  const items = ["Homepage", "Skills", "Projects", "Contact"];
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
        <motion.div className="div" style={{ display: "flex", gap: "10px" }}>
          <a
            href="https://www.linkedin.com/in/brian-mwema-009589262/"
            target="_blank"
          >
            <img src="linkedIn.png" alt="" width={38} />
          </a>
          <a
            href="https://github.com/brian070069?tab=repositories"
            target="_blank"
          >
            <img src="/skillsLogos/github.png" alt="" width={40} />
          </a>
        </motion.div>
        <motion.div
          className="social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.a href="#HomePage">
            <h4>Home</h4>
          </motion.a>
          <motion.a href="#Projects">
            <h4>Projects</h4>
          </motion.a>
          <motion.a href="#Skills">
            <h4>Skills</h4>
          </motion.a>
          <motion.a href="#Contact">
            <h4>Contact</h4>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
