import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <motion.div variants={textVariant()} className="mb-9">
        <p className={styles.sectionSubText}>What I Know</p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div
            className="w-28 h-28 mr-4 flex flex-col justify-center items-center"
            key={technology.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <BallCanvas icon={technology.icon} />
            <div className="h-[5px] bg-white mt-2 rounded-lg w-full relative">
              <div
                style={{ width: `${technology.percentage}%` }}
                className="h-[5px] bg-[#915eff] rounded-lg"
              ></div>
              {hoveredIndex === index && (
                <p className="absolute top-2 left-[35%] ml-1 mt-1 text-sm">
                  {technology.percentage}%
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
