import { useState, useRef } from "react";
import { MdHtml, MdJavascript, MdCss } from "react-icons/md";
import { FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5"; // arrow icon

const iconsMap = {
  react: <FaReact />,
  tailwind: <RiTailwindCssFill />,
  javascript: <MdJavascript />,
  gsap: (
    <span className="text-[0.3rem] font-bold uppercase align-middle">
      GSAP.js
    </span>
  ),
  sass: <FaSass />,
  css: <MdCss />,
  html: <MdHtml />,
  next: <RiNextjsFill />,
};

const projectInfo = [
  {
    id: 1,
    name: "PCK",
    date: "2023",
    icons: ["html", "css", "javascript"],
    review:
      "A practical site facilitating clothing donations, emphasizing usability and ease of access for social good.",
    images: ["img1.png", "img2.png", "img3.png"],
    bgColor: "bg-yellow-200",
    href: "https://pck-fundation.netlify.app",
  },
  {
    id: 2,
    name: "Afal-Logistics",
    date: "2024",
    icons: ["html", "css", "javascript"],
    review:
      "A clear, service-oriented landing page created for a local logistics firm, translating client needs into an effective digital presence.",
    images: ["img1.png", "img2.png", "img3.png"],
    bgColor: "bg-blue-200",
    href: "https://afal-logistics.netlify.app",
  },
  {
    id: 3,
    name: "Chat-GPT3 Landing Page",
    date: "2024",
    icons: ["react", "css", "javascript"],
    review:
      "A functional and straightforward landing page that effectively presents AI product features with clarity and simplicity.",
    images: ["img1.png", "img2.png", "img3.png"],
    bgColor: "bg-violet-200",
    href: "https://what-chat-gpt3.netlify.app",
  },
  {
    id: 4,
    name: "Gericht Restaurant",
    date: "2024",
    icons: ["react", "css", "javascript"],
    review:
      "A clean and professional landing page delivering essential restaurant information, reflecting solid foundational skills in web layout and user experience.",
    images: ["img1.png", "img2.png", "img3.png"],
    bgColor: "bg-green-200",
    href: "https://grestaurant-landing-page.netlify.app",
  },
  {
    id: 5,
    name: "Cozy Leaf",
    date: "2025",
    icons: ["react", "tailwind", "javascript", "gsap"],
    review:
      "Cozy Leaf Restaurant creates an inviting, cozy atmosphere that resonates with upscale vegetarian guests, balancing aesthetic appeal with user-friendly navigation.",
    images: ["img1.png", "img2.png", "img3.png"],
    bgColor: "bg-yellow-200",
    href: "https://cl-restaurant.netlify.app",
  },
  {
    id: 6,
    name: "Post Prime",
    date: "2025",
    icons: ["react", "sass", "javascript", "gsap"],
    review:
      "Post Prime is a sleek podcast site for former basketball players, featuring smooth content delivery and an appealing interface tailored to sports enthusiasts.",
    images: ["img1.png", "img2.png", "img3.png"],
    bgColor: "bg-cyan-200",
    href: "#",
  },
];

function ProjectItem({
  name,
  date,
  icons,
  review,
  images,
  bgColor,
  href,
  isExpanded,
  onToggle,
}) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-rose-200 text-rose-100">
      {/* Header row */}
      <button
        className="grid grid-cols-3 gap-3 items-center p-3 w-full text-left cursor-pointer hover:bg-rose-100/10 transition-colors"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {/* Project name */}
        <h3 className="text-xs md:text-lg">{name}</h3>

        {/* Tech icons */}
        <div className="flex flex-wrap space-x-2 items-center gap-1 text-xs md:text-xl">
          {icons.map((iconName) => (
            <div className="flex items-center" key={iconName}>
              {iconsMap[iconName]}
            </div>
          ))}
        </div>

        {/* Date + arrow */}
        <div className="flex items-center justify-end space-x-2">
          <span className="text-xs md:text-lg">{date}</span>
          <IoChevronDown
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>

      {/* Expanded content */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all ${bgColor} text-black`}
        style={{
          height: isExpanded ? contentRef.current?.scrollHeight + "px" : "0px",
          opacity: isExpanded ? 1 : 0,
          transition:
            "height 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s ease",
        }}
      >
        <div className="p-4 bg-rose-100/10 rounded-b-lg space-y-4">
          {/* Review text */}
          <p className="text-sm">{review}</p>

          {/* Images row */}
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`w-full h-24 rounded-md flex items-center justify-center text-xs text-gray-700 border-2`}
              >
                {img}
              </div>
            ))}
          </div>

          {/* Live demo link */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 text-sm font-semibold text-white bg-rose-500 rounded hover:bg-rose-600 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="h-screen p-4 md:p-8 text-rose-100">
      {/* Table header */}
      <div className="grid grid-cols-3 p-2 gap-3 font-semibold border-b-2 border-purple-400 uppercase text-xs md:text-xl">
        <span className="justify-self-start">Projects</span>
        <span className="justify-self-start">Tech</span>
        <span className="justify-self-end">Date</span>
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {[...projectInfo] // kopiujemy tablicę, żeby nie mutować oryginału
          .sort((a, b) => b.id - a.id) // malejąco po id
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
