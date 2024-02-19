import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import BetikaProject from "../../assets/betika.png";
import QmelterProject from "../../assets/qmelter.png";
import Admin from "../../assets/admin.png";
import React, { useRef } from "react";

const Projects = [
  {
    id: 1,
    image: QmelterProject,
    title: "Food Ordering application",
    projectLink: "https://sansiroo.netlify.app/",
    githubLink:
      "https://github.com/brian070069/Yamz-Food-Ordering-Application.git",
    technology: ["Reactjs", "Javascript", "CSS3", "HTML5", "Restful-Apis"],
    description: `A fully responsive food ordering application that allows users to 
                 purchase there desired meal easily and delivered at there do steps.
                 The application intergrates an online payment called M-PESA that allows user to pay
                 through mobile money making it easy and safe to make transaction
                 The app is currently being USED by a local hotel and the app has approximately
                 40 USERS Pay day.
    `,
  },
  {
    id: 2,
    image: BetikaProject,
    title: "Betting Application",
    githubLink: "https://github.com/brian070069/sports-betting-app.git",
    projectLink: "https://greatbets.netlify.app",
    technology: ["Reactjs", "Typescript", "taiwindcss", "Restful-Apis"],
    description: `
       A captivating full responsive betting application that allows users 
       to place bets on their desired sports, enabling easy navigation
       throughout the entire application while maintaining a great user experience overall
    `,
  },

  {
    id: 3,
    image: Admin,
    title: "Admin managent app",
    projectLink: "https://admingatu.netlify.app",
    githubLink: "https://github.com/brian070069/managment-application.git",
    technology: ["Reactjs", "Javascript", "tailwind", "HTML5"],
    description: `
           The admin management application is fully responsive and user-friendly, offering
            clear visual representations of data through charts Administrators can easily 
            view and update user and product information, 
            streamlining the management process.
    `,
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

                  <div className="technologies">
                    {item.technology.map((tech) => {
                      return <span>{tech}</span>;
                    })}
                  </div>

                  <p>
                    {item.id === 1 ? (
                      <p>
                        A fully responsive food ordering application that allows
                        users to purchase there desired meal easily and get
                        delivered at there do steps. The application intergrates
                        a mobile payment called M-PESA that allows user to pay
                        through mobile money making it easy and safe to make
                        transaction The app is currently being USED by a local
                        hotel and the app has approximately
                        <span
                          style={{
                            color: "red",
                            marginLeft: "10px",
                            fontSize: "16px",
                          }}
                        >
                          100+ users Pay day
                        </span>{" "}
                        improving there sales by 20%
                      </p>
                    ) : (
                      item.description
                    )}
                  </p>

                  <div className="row portfolioLinks">
                    <a
                      href={item.projectLink}
                      target="_blank"
                      className="liveProjectlink"
                      rel="noopener noreferrer"
                    >
                      Live Project
                    </a>
                    <a
                      href={item.githubLink}
                      target="_blank"
                      className="githubLink"
                      rel="noopener noreferrer"
                    >
                      <img src="/skillsLogos/github.png" alt="" width={40} />
                      <h4>Github Code</h4>
                    </a>
                  </div>
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
