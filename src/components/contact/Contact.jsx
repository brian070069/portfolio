import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_yc0iefc", "template_xs6nbsi", formRef.current, {
        publicKey: "AOekR0HJr5u3hrdzm",
      })
      .then(
        () => {
          toast.success("message send succesfully");
          setIsLoading(false);
        },
        (error) => {
          toast.error("failed to send message");
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="contactTextContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Email</h2>
          <span>brianwgatundu@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>254740774613</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Your Name" name="name" />
          <input type="email" required placeholder="Your Email" name="email" />
          <textarea rows="8" placeholder="message" name="message"></textarea>
          <button disabled={isLoading}>
            {isLoading ? "Sending......" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
