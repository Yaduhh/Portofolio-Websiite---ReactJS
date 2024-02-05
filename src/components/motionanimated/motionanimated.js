import React from "react";
import { motion } from "framer-motion";

const MotionAnimated = ({ isInView, children }) => {
  const motionStyle = {
    visible: {
      transform: "none",
      opacity: 1,
      transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    },
    hidden: {
      transform: "translateX(-200px)",
      opacity: 0,
    },
  };

  return (
    <motion.div style={isInView ? motionStyle.visible : motionStyle.hidden}>
      {children}
    </motion.div>
  );
};

export default MotionAnimated;
