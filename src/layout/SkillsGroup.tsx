import { IoLogoJavascript } from "react-icons/io";
import SkillsItem from "../components/SkillsItem";
import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJest, SiRedux, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
function SkillsGroup() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },

    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <BiLogoTailwindCss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiJest />,
      name: "Jest",
    },
  ];

  return (
    <div className="my-10 w-full">
      <div className="grid grid-cols-6 w-full gap-10 place-content-center">
        {skills.map((skill, index) => (
          <SkillsItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsGroup;
