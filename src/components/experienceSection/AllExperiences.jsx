import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences= [
  { 
    job: "Front-End Developer",
    company: "SYENAPP INDIA",
    date: "2022 - 2024 Jan",
    responsibilities: [
      "Developed responsive UI screens for Syenapp mobile applications.",
      "Integrated REST APIs into the application.",
      "Integrated Google AdMob for monetization.",
      "Handled app deployment on Play Store.",
      "Learned and used Xcode for iOS builds and App Store deployment.",
      "Created APIs using Node.js and deployed them on AWS.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Techminds Group LLC",
    date: "2022 - 2023",
    responsibilities: [
      "Extended front-end skills with React.js and WordPress.",
      "Developed 2 websites using WordPress with SEO optimization.",
      "Developed 2 web applications using React.js.",
      "Learned React Native and created UI screens for mobile applications.",
    ],
  },
  {
    job: "Software Developer",
    company: "Thirumoolar Software Pvt Ltd - Chennai",
    date: "2021 - 2022", 
    responsibilities: [ 
      "Started career as a mobile app tester.",
      "Learned Ionic Framework and Angular.",
      "Created responsive UI screens for mobile apps and integrated APIs.",
      "Worked on Vanigan Mobile App development.",
      "Performed app unit testing.",
      "Integrated Razorpay for payment processing.",
      "Handled app deployment on Play Store.",
    ], 
  }, 
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.9}}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
