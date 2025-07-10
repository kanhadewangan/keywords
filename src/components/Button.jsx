import { motion, useTransform, useMotionValue } from "motion/react";
import React from "react";

const Button = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 3]);
  const border =useTransform(x,[-100,0,100],["20%","50%","20%"])
  const back = useTransform(
    x,
    [-100, 0, 100],
    ["#ff0000", "", "#0000ff"]
  );
  return (
    <div>
      <div>
        <motion.div
          style={{ x, scale, back ,border }}
          className="w-20 h-20 bg-blue-600 rounded-2xl text-center"
          drag="x"
            dragConstraints={{ left: -100, right: 100 }}
        >
          hello
        </motion.div>
      </div>
    </div>
  );
};

export default Button;
