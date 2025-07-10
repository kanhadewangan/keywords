import React from "react";
import { motion } from "motion/react";
const Cards = () => {
  return (
    <div className="flex justify-center items-center py-[30vh]">
      {/* <motion.div
        animate={{
          scale: [2, 1, 0.5, 1.5, 1.0, 2],

          rotate: [0, 0, 180, 270, 270, 180, 0],
          borderRadius: ["0%", "10%", "20%", "30%", "40%", "30%", "20%", "10%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          repeatDelay: 1,
          times: [0, 0.25, 0.35, 0.45, 0.45, 0.35, 0.25, 0],
        }}
        className="h-50 w-50 bg-indigo-400 "
      ></motion.div> */}
      <motion.div
      whileHover={
        {
          scale:2
        }
        
      } 
      
      whileFocus ={{
        scale:2.2
      }}
      whileTap={{
        scale:3.2
      }}
      
    className="bg-green-400 h-8 w-20 text-center rounded-xl border-2 font-semibold ">
      <button
      > Click me </button>

      </motion.div>
    </div>
  );
};

export default Cards;
