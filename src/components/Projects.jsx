import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import {
  afal1,
  afal2,
  afal3,
  cl1,
  cl2,
  cl3,
  g1,
  g2,
  g3,
  gpt1,
  gpt2,
  gpt3,
  pck1,
  pck2,
  pck3,
} from "../assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Mapping of icons for project tech stack
const iconsMap = {
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

// Project data
const projectInfo = [
  {
    id: 1,
    name: "PCK",
    date: "2023",
    icons: ["html", "css", "javascript"],
    review:
      "Landing page for a donation platform with smooth GSAP animations and a step-by-step donation flow.",
    images: [pck1, pck2, pck3],
    bgColor: "bg-yellow-300/60",
    bgColor2: "bg-black",
    textColor: "text-black",
    textColor2: "text-white",
    href: "https://pck-fundation.netlify.app",
    gitHref: "https://github.com/TwojNick/pck",
  },
  {
    id: 2,
    name: "Afal-Logistics",
    date: "2024",
    icons: ["html", "css", "javascript"],
    review:
      "Clear, service-oriented landing page created for a local logistics firm, translating client needs into an effective digital presence.",
    images: [afal1, afal2, afal3],
    bgColor: "bg-black/50",
    bgColor2: "bg-red-400/80",
    textColor: "text-white",
    textColor2: "text-black",
    href: "https://afal-logistics.netlify.app",
    gitHref: "https://github.com/TwojNick/afal-logistics",
  },
  {
    id: 3,
    name: "Chat-GPT3 Landing Page",
    date: "2024",
    icons: ["react", "css", "javascript"],
    review:
      "Functional and straightforward landing page that effectively presents AI product features with clarity and simplicity.",
    images: [gpt1, gpt2, gpt3],
    bgColor: "bg-indigo-400/20",
    bgColor2: "bg-sky-400/80",
    textColor: "text-white",
    textColor2: "text-black",
    href: "https://what-chat-gpt3.netlify.app",
    gitHref: "https://github.com/TwojNick/chat-gpt3-landing",
  },
  {
    id: 4,
    name: "Gericht Restaurant",
    date: "2024",
    icons: ["react", "css", "javascript"],
    review:
      "Clean and professional landing page delivering essential restaurant information, reflecting solid foundational skills in web layout and user experience.",
    images: [g1, g2, g3],
    bgColor: "bg-amber-300/40",
    bgColor2: "bg-black/80",
    textColor: "text-black",
    textColor2: "text-amber-300",
    href: "https://grestaurant-landing-page.netlify.app",
    gitHref: "https://github.com/TwojNick/gericht-restaurant",
  },
  {
    id: 5,
    name: "Cozy Leaf",
    date: "2025",
    icons: ["react", "tailwind", "javascript", "gsap"],
    review:
      "Cozy Leaf Restaurant creates an inviting, cozy atmosphere that resonates with upscale vegetarian guests, balancing aesthetic appeal with user-friendly navigation.",
    images: [cl1, cl2, cl3],
    bgColor: "bg-pink-500/40",
    bgColor2: "bg-green-500/80",
    textColor: "text-violet-100",
    textColor2: "text-fuchsia-100",
    href: "https://cl-restaurant.netlify.app",
    gitHref: "https://github.com/TwojNick/cozy-leaf",
  },
  {
    id: 6,
    name: "Post Prime",
    date: "2025",
    icons: ["react", "sass", "javascript", "gsap"],
    review:
      "Post Prime is a sleek podcast site for former basketball players, featuring smooth content delivery and an appealing interface tailored to sports enthusiasts.",
    images: [cl1, cl1, cl1], // ⚠️ placeholders
    bgColor: "bg-gray-300/40",
    bgColor2: "bg-cyan-300",
    textColor: "text-black",
    textColor2: "text-cyan-900",
    href: "#",
    gitHref: "https://github.com/TwojNick/post-prime",
  },
];

// Single project item (accordion)
const ProjectItem = ({
  name,
  date,
  icons,
  review,
  images,
  bgColor,
  bgColor2,
  textColor,
  textColor2,
  href,
  gitHref,
  isExpanded,
  onToggle,
}) => {
  const contentRef = useRef(null);

  return (
    <div>
      {/* Header row */}
      <button
        className="reveal grid grid-cols-3 gap-3 items-center p-3 w-full text-left cursor-pointer hover:bg-rose-100/10 transition-colors"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <h3 className="text-sm md:text-lg">{name}</h3>

        {/* Tech icons */}
        <div className="flex flex-wrap items-center gap-2 text-lg md:text-xl">
          {icons.map((iconName) => (
            <span key={iconName}>{iconsMap[iconName]}</span>
          ))}
        </div>

        {/* Date + arrow */}
        <div className="flex items-center justify-end space-x-2">
          <span className="text-sm md:text-lg">{date}</span>
          <IoChevronDown
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>

      {/* Divider under header */}
      <div className="h-0.5 bg-pink-300/80 divider"></div>

      {/* Expanded content */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-700 ease-in-out ${bgColor}`}
        style={{
          maxHeight: isExpanded ? "9999px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div
          className={`overflow-y-auto p-6 rounded-b-lg space-y-4 ${textColor}`}
        >
          {/* Project description */}
          <p className="text-sm">{review}</p>

          {/* Project images */}
          <div className="grid md:grid-cols-3 gap-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${name} screenshot ${idx + 1}`}
                className="w-full h-full object-cover rounded-md shadow-lg shadow-black/40"
                loading="lazy"
              />
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-2 px-4 py-2 text-sm font-semibold ${bgColor2} ${textColor2} rounded duration-500 hover:bg-gray-100 hover:text-black/80 transition-colors`}
            >
              Live Demo
            </a>
            <a
              href={gitHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-2 px-4 py-2 text-sm font-semibold ${bgColor} ${textColor} rounded duration-500 hover:bg-gray-100 hover:text-black/80 transition-colors`}
            >
              GIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects section
const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  useGSAP(() => {
    // Animate project headers
    gsap.from(".reveal", {
      x: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".reveal",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animate dividers
    gsap.from(".divider", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 2.5,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".divider",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="min-h-screen p-4 md:p-8 text-rose-100">
      {/* Section header */}
      <div className="grid grid-cols-3 p-2 gap-3 font-semibold uppercase text-xs md:text-xl reveal">
        <span className="justify-self-start">Projects</span>
        <span className="justify-self-start">Tech</span>
        <span className="justify-self-end">Date</span>
      </div>
      <div className="h-1 bg-pink-500 divider"></div>

      {/* Projects list */}
      <div className="flex flex-col">
        {[...projectInfo]
          .sort((a, b) => b.id - a.id) // sort by newest first
          .map((item) => (
            <ProjectItem
              key={item.id}
              {...item}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;