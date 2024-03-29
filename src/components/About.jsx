import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useSelector } from "react-redux";

const ServiceCard = ({ index, name, image, charge, desc }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="service-card bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={image.url}
            alt={name}
            className="service-img w-16 h-16 object-cover rounded-[50%]"
          />
          <h3 className="service-name text-white text-[20px] font-bold text-center">
            {name}
          </h3>
          <p className="service-charge">{charge}</p>
          <h3 className="service-desc text-secondary">{desc}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { items } = useSelector((state) => state.data);

  const { description } = items?.user?.about || {};
  const services = items?.user?.services || [];

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {description}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
