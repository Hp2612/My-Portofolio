import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiApple } from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaWordpress } from "react-icons/fa";
import { SiIonic } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
 

  {
    skill: "React Native",
    icon: FaReact,
  },
  {
    skill: "Angular",
    icon: FaAngular,
  },
  {
    skill: "Ionic",
    icon: SiIonic,
  },
  {
    skill: "WordPress",
    icon: FaWordpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Xcode",
    icon: SiApple, // Representing Xcode (Apple Development)
  },
   {
    skill: "Postman",
    icon: SiPostman,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-1 max-w-[1600px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
