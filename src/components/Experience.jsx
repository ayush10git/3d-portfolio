import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useSelector } from "react-redux";
import workIcon from "../assets/work.jpg"

const ExperienceCard = ({ experience }) => {
  return <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.startDate.slice(0, 10)}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full ">
        <img
          src={workIcon}
          alt={experience.company_name}
          className="w-[105%] h-[105%] rounded-[100%]"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.jobTitle}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.bulletPoints.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>;
};

const Experience = () => {
  const { items, loading, error } = useSelector((state) => state.data);
  // console.log(items)

  const timeline = items?.user?.timeline || [];


  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done do far.</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {timeline.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
