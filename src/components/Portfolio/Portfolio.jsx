import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Projects = [
  {
    id: 1,
    image: "people.webp",
    title: "Project",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe quam
      velit vitae et a cumque, quod omnis numquam laudantium harum nostrum eius.
      Vel numquam aut eum veniam pariatur iste! Accusantium, architecto quis,
      molestias harum earum mollitia error perferendis perspiciatis culpa
      sapiente animi ut, quisquam nostrum quia in tempora nesciunt.`,
  },
  {
    id: 2,
    image: "people.webp",
    title: "Project",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe quam
      velit vitae et a cumque, quod omnis numquam laudantium harum nostrum eius.
      Vel numquam aut eum veniam pariatur iste! Accusantium, architecto quis,
      molestias harum earum mollitia error perferendis perspiciatis culpa
      sapiente animi ut, quisquam nostrum quia in tempora nesciunt.`,
  },
  {
    id: 3,
    image: "people.webp",
    title: "Project",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe quam
      velit vitae et a cumque, quod omnis numquam laudantium harum nostrum eius.
      Vel numquam aut eum veniam pariatur iste! Accusantium, architecto quis,
      molestias harum earum mollitia error perferendis perspiciatis culpa
      sapiente animi ut, quisquam nostrum quia in tempora nesciunt.`,
  },
  {
    id: 4,
    image: "people.webp",
    title: "Project",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe quam
      velit vitae et a cumque, quod omnis numquam laudantium harum nostrum eius.
      Vel numquam aut eum veniam pariatur iste! Accusantium, architecto quis,
      molestias harum earum mollitia error perferendis perspiciatis culpa
      sapiente animi ut, quisquam nostrum quia in tempora nesciunt.`,
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    dumping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="Projects">
      <div className="progress">
        <h1>My Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {Projects.map((item) => {
        return (
          <section key={item.id}>
            <div className="portfolioContainer">
              <div className="Portfoliowrapper">
                <div className="portfolioImageContainer">
                  <img src={item.image} alt="" />
                </div>
                <motion.div
                  className="PortfoliotextContainer"
                  transition={{ duration: 1 }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button>See Project</button>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Portfolio;
