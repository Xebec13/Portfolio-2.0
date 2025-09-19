import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { FaReact, FaSass, FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa";
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
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/Xebec13",
    color: "text-black/80", 
  },
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/david-hoesen-054257308/",
    color: "text-blue-400/80", 
  },
  email: {
    name: "Email",
    icon: <FaEnvelope />, 
    href: "mailto:dhoesen@gmail.com",
    color: "text-pink-400/80",
  },
};