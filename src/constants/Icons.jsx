import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { FaReact, FaSass, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

// Tech stack icons
export const iconsMap = {
  react: <FaReact />,
  tailwind: <RiTailwindCssFill />,
  javascript: <MdJavascript />,
  gsap: (
    <span className="block text-[0.4rem] font-bold uppercase align-middle">
      GSAP.js
    </span>
  ),
  sass: <FaSass />,
  css: <MdCss />,
  html: <MdHtml />,
  next: <RiNextjsFill />,
};



export const socialsMap = {
  github: { name: "GitHub", icon: <FaGithub /> },
  linkedin: { name: "LinkedIn", icon: <FaLinkedin /> },
  
};