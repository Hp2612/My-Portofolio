import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m a passionate Front-End Developer with 2.10 years of hands-on experience building responsive web and mobile applications using multiple front-end frameworks. My expertise spans both web and mobile ecosystems, allowing me to deliver seamless user experiences across platforms.

After a 1.5-year career break, I’m actively seeking opportunities to re-enter the tech world with fresh energy and a growth mindset. During this break, I stayed updated with the latest trends in UI/UX and modern JavaScript frameworks. I’m eager to contribute to impactful projects, collaborate with forward-thinking teams, and continue growing in the ever-evolving front-end landscape.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
