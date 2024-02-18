import { motion } from "framer-motion";
import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const SideBar = () => {
  const [Open, setIsOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 45px 45px)",
      transition: {
        type: "spring",
        stifness: 400,
        dumping: 40,
        duration: 1,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        type: "spring",
        stifness: 400,
        dumping: 30,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      animate={Open ? "open" : "closed"}
      variants={variants}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} Open={Open} />
    </motion.div>
  );
};

export default SideBar;
