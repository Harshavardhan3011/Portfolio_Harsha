import React from "react";
import { motion } from "framer-motion";

export default function MotionWrapper({ children, className = "", delay = 0, yOffset = 20, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
