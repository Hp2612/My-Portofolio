import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiIonic } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiApple } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-5xl text-orange" />
            <p className="text-center mt-2">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
