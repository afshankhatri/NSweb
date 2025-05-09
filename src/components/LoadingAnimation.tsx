import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const LoadingAnimation = () => {
  const letters = ["N", "I", "L", "A", "X"]; 
  const animationDuration = 1; // Duration for each letter animation

  return (
    <motion.div
      className="fixed inset-0  flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: letters.length * animationDuration + 1 }}
      onAnimationComplete={() => (document.body.style.overflow = 'unset')}
    >
      <motion.div
        className="relative w-32 h-32"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: letters.length * animationDuration + 1, times: [0, 0.5, 1] }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
            animate={{
              scale: [1, 2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "20%", "50%"]
            }}
            transition={{
              duration: letters.length * animationDuration + 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: 0
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-[70px] font-bold text-blue-950"
        style={{ fontFamily: 'CollegeFont' }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: animationDuration,
                delay: index * animationDuration
              }}
              className="absolute"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.h1
          className="absolute inset-0 flex items-center justify-center text-[50px] font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: letters.length * animationDuration,
            duration: 1
          }}
        >
          {letters.join("")}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;