import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiArrowRight } from 'react-icons/fi';

const ContactSocial = () => {
  return (
   <div className="flex gap-4 ">
    <SingleContactSocial link="#" Icon={() => <FiArrowRight color="orange" />} />
      <SingleContactSocial link="https://www.linkedin.com/in/hari-prasad-722841235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"      Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Hp2612"                                Icon={FiGithub} />
     
       </div>
  );
};
export default ContactSocial;
